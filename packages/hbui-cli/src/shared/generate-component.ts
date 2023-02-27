import { resolve } from 'path'
import { WriteFileOptions } from 'fs'
import { mkdirSync, writeFileSync } from 'fs-extra'
import { cliConfig } from './config'
import { coreFileName, typesFileName } from '../templates/component/utils'
import genIndexTemplate from '../templates/component'
import genCoreTemplate from '../templates/component/core'
import genStyleTemplate from '../templates/component/style'
import genTypesTemplate from '../templates/component/types'
import genTestTemplate from '../templates/component/test'

const WRITE_FILE_OPTIONS: WriteFileOptions = { encoding: 'utf-8' }

export default function genComponent(params: any) {
  const { name, title, category, parts } = params
  const targetDir = resolve(cliConfig.cwd, '../hbui-vue')
  const componentDir = resolve(targetDir, 'ui')

  const coreFilePath = resolve(componentDir, coreFileName(name))
  const srcPath = resolve(coreFilePath, 'src')
  const testsPath = resolve(coreFilePath, '__tests__')

  mkdirSync(coreFilePath, { recursive: true })
  mkdirSync(srcPath, { recursive: true })
  mkdirSync(testsPath, { recursive: true })

  let needsTypes = false

  if (parts.includes('component')) {
    needsTypes = true

    const coreFilePath = resolve(srcPath, coreFileName(name))
    // 组件
    writeFileSync(coreFilePath + '.tsx', genCoreTemplate(name), WRITE_FILE_OPTIONS)
    // 样式
    writeFileSync(
      coreFilePath + cliConfig.libStyleFileSuffix,
      genStyleTemplate(name),
      WRITE_FILE_OPTIONS
    )
  }

  if (needsTypes) {
    const typesFilePath = resolve(srcPath, typesFileName(name) + '.ts')
    // 类型
    writeFileSync(typesFilePath, genTypesTemplate(name), WRITE_FILE_OPTIONS)
  }

  if (parts.length > 0) {
    const indexFilePath = resolve(coreFilePath, `${cliConfig.libEntryFileName}.ts`)
    const testFilePath = resolve(testsPath, `${coreFileName(name)}.test.ts`)
    // index
    writeFileSync(indexFilePath, genIndexTemplate(name, title, category, parts), WRITE_FILE_OPTIONS)
    // test
    writeFileSync(testFilePath, genTestTemplate(name), WRITE_FILE_OPTIONS)
  }
}
