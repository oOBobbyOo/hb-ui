import { resolve } from 'path'
import { camelCase, upperFirst } from 'lodash-es'
import { readdirSync, existsSync, readFileSync } from 'fs-extra'
import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import { WRITE_FILE_OPTIONS } from './generate-component'
import logger from './logger'

type AnyKeyValue = { [key: string]: any }

export function bigCamelCase(str: string) {
  return upperFirst(camelCase(str))
}

export function resolveComponentsInfo(componentDir: string, ignoreDir: string[]) {
  return readdirSync(componentDir)
    .filter((dir) => !ignoreDir.includes(dir) && existsSync(resolve(componentDir, dir, 'index.ts')))
    .map((dir) => ({
      name: bigCamelCase(dir), // 首字母大写
      dir, // 目录名称
      path: resolve(componentDir, dir, 'index.ts') // 路径
    }))
}

export function parseComponentsInfo(dir: string, path: string) {
  const componentInfo: AnyKeyValue = {
    dir
  }
  let hasExportDefault = false
  const indexContent = readFileSync(path, WRITE_FILE_OPTIONS)

  const ast = parse(indexContent as string, {
    sourceType: 'module',
    plugins: ['typescript']
  })

  traverse(ast, {
    ExportDefaultDeclaration({ node }) {
      hasExportDefault = true
      // @ts-ignore
      if (node.declaration?.properties) {
        // @ts-ignore
        const properties = node.declaration?.properties
        properties.forEach((pro: any) => {
          if (pro.type === 'ObjectProperty') {
            componentInfo[pro.key.name] = pro.value.value
          }
        })
      }
    }
  })

  if (!hasExportDefault) {
    logger.warn(`${componentInfo.dir} must have "export default" and component info.`)
  }

  return componentInfo
}

export function exportComponentsInfo(filesInfo: AnyKeyValue[]) {
  const componentsInfo: AnyKeyValue[] = []
  filesInfo.forEach(({ dir, path }) => {
    const info = parseComponentsInfo(dir, path)
    componentsInfo.push(info)
  })
  return componentsInfo
}

// 生成文档侧边栏导航
export function genSidebarNavs(componentsInfo: AnyKeyValue[], categoryMap: Map<any, any>) {
  componentsInfo.forEach((info: AnyKeyValue) => {
    if (categoryMap.has(info.category)) {
      categoryMap.get(info.category).push({
        text: info.title,
        link: `/components/${info.dir}/`
      })
    } else {
      logger.warn(`组件 ${info.dir} 的分类 ${info.category} 不存在！`)
    }
  })
  return Array.from(categoryMap).map(([k, v]) => ({ text: k, items: v }))
}
