import { resolve } from 'path'
import { camelCase, upperFirst } from 'lodash-es'
import { readdirSync, existsSync, readFileSync } from 'fs-extra'
import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import { INDEX_FILE_NAME, WRITE_FILE_OPTIONS } from './constant'
import logger from './logger'

export function bigCamelCase(str: string) {
  return upperFirst(camelCase(str))
}

type AnyKeyValue = { [key: string]: any }

interface FileInfo {
  name: string
  dir: string
  path: string
}

interface ComponentInfo {
  dir: string
  title: string
  category: string
  status: string
}

interface ComponentMeta {
  install: string | null
  parts: string[]
  fileInfo: FileInfo
}

// 获取组件基本信息
export function resolveComponentsInfo(componentDir: string, ignoreDir: string[]) {
  return (
    readdirSync(componentDir)
      // 过滤：必须是目录，且不存在与忽略目录内，拥有 `index.ts`
      .filter((dir) => !ignoreDir.includes(dir) && existsSync(resolve(componentDir, dir, INDEX_FILE_NAME)))
      .map((dir) => ({
        name: bigCamelCase(dir), // 首字母大写
        dir, // 目录名称
        path: resolve(componentDir, dir, INDEX_FILE_NAME) // 路径
      }))
  )
}

// 根据每个组件入口文件`index.ts`解析生成组件信息
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
    ExportDefaultDeclaration({ node }: AnyKeyValue) {
      hasExportDefault = true
      if (node.declaration?.properties) {
        const properties = node.declaration.properties
        properties.forEach((pro: AnyKeyValue) => {
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

  return componentInfo as ComponentInfo
}

// 根据每个组件入口文件`index.ts`解析生成组件元信息
export function parseComponentsMeta(fileInfo: FileInfo) {
  const indexContent = readFileSync(fileInfo.path, WRITE_FILE_OPTIONS)

  const ast = parse(indexContent as string, {
    sourceType: 'module',
    plugins: ['typescript']
  })

  const exportName: string[] = []
  let exportDefault = null

  traverse(ast, {
    ExportNamedDeclaration({ node }: AnyKeyValue) {
      if (node.specifiers.length) {
        node.specifiers.forEach((specifier: AnyKeyValue) => {
          exportName.push(specifier.local.name)
        })
      } else if (node.declaration) {
        if (node.declaration.declarations) {
          node.declaration.declarations.forEach((dec: AnyKeyValue) => {
            exportName.push(dec.id.name)
          })
        } else if (node.declaration.id) {
          exportName.push(node.declaration.id.name)
        }
      }
    },
    ExportDefaultDeclaration() {
      exportDefault = fileInfo.name + 'Install'
    }
  })

  return {
    install: exportDefault,
    parts: exportName,
    fileInfo
  }
}

// 导出组件信息
export function exportComponentsInfo(filesInfo: FileInfo[]) {
  const componentsInfo: ComponentInfo[] = []
  filesInfo.forEach(({ dir, path }) => {
    const info = parseComponentsInfo(dir, path)
    componentsInfo.push(info)
  })
  return componentsInfo
}

// 导出组件元信息
export function exportComponentsMeta(filesInfo: FileInfo[]) {
  const componentsMeta: ComponentMeta[] = []
  filesInfo.forEach((fileInfo) => {
    const metas = parseComponentsMeta(fileInfo)
    componentsMeta.push(metas)
  })
  return componentsMeta
}

// 生成文档侧边栏导航
export function genSidebarNavs(componentsInfo: ComponentInfo[], categoryMap: Map<any, any>) {
  componentsInfo.forEach((info: ComponentInfo) => {
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
