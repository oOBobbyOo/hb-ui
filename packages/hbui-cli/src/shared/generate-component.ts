import { resolve } from 'path'
import { mkdirSync, writeFileSync } from 'fs-extra'
import { cliConfig } from './config'
import { UI_DIR, SRC_DIR_NAME, TESTS_DIR_NAME, INDEX_FILE_NAME, WRITE_FILE_OPTIONS } from './constant'
import { coreFileName, coreName, directiveFileName, serviceFileName, typesFileName } from '../templates/component/utils'
import genIndexTemplate from '../templates/component'
import genCoreTemplate from '../templates/component/core'
import genStyleTemplate from '../templates/component/style'
import genTypesTemplate from '../templates/component/types'
import genTestTemplate from '../templates/component/test'
import genServiceTemplate from '../templates/component/service'
import genDirectiveTemplate from '../templates/component/directive'
import logger from './logger'

export default function genComponent(params: any) {
  const { name, title, category, parts } = params
  // 组件目录
  const coreFilePath = resolve(UI_DIR, coreFileName(name))
  // 组件src目录
  const srcPath = resolve(coreFilePath, SRC_DIR_NAME)
  // 组件测试目录
  const testsPath = resolve(coreFilePath, TESTS_DIR_NAME)

  // 创建目录
  mkdirSync(coreFilePath, { recursive: true })
  mkdirSync(srcPath, { recursive: true })
  mkdirSync(testsPath, { recursive: true })

  let needsTypes = false
  if (parts.includes('component')) {
    needsTypes = true

    const coreFilePath = resolve(srcPath, coreFileName(name))
    // 组件 [name].tsx
    writeFileSync(coreFilePath + '.tsx', genCoreTemplate(name), WRITE_FILE_OPTIONS)
    // 样式 [name].scss
    writeFileSync(coreFilePath + cliConfig.libStyleFileSuffix, genStyleTemplate(name), WRITE_FILE_OPTIONS)
  }

  if (parts.includes('service')) {
    needsTypes = true

    const serviceName = resolve(srcPath, serviceFileName(name) + '.ts')
    // [name]-service.ts
    writeFileSync(serviceName, genServiceTemplate(name), WRITE_FILE_OPTIONS)
  }

  if (parts.includes('directive')) {
    needsTypes = true

    const directiveName = resolve(srcPath, directiveFileName(name) + '.ts')
    // [name]-directive.ts
    writeFileSync(directiveName, genDirectiveTemplate(), WRITE_FILE_OPTIONS)
  }

  if (needsTypes) {
    const typesName = resolve(srcPath, typesFileName(name) + '.ts')
    // [name]-types.ys
    writeFileSync(typesName, genTypesTemplate(name), WRITE_FILE_OPTIONS)
  }

  if (parts.length > 0) {
    const indexFileName = resolve(coreFilePath, INDEX_FILE_NAME)
    const testFileName = resolve(testsPath, `${coreFileName(name)}.test.ts`)
    // index.ts
    writeFileSync(indexFileName, genIndexTemplate(name, title, category, parts), WRITE_FILE_OPTIONS)
    // [name].test.ts
    writeFileSync(testFileName, genTestTemplate(name), WRITE_FILE_OPTIONS)
  }

  logger.success(`The component "${coreName(name)}" directory has been generated successfully.`)
}
