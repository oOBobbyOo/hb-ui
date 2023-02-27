import { resolve } from 'path'
import { mkdirSync, writeFileSync } from 'fs-extra'
import { cliConfig } from './config'
import { WRITE_FILE_OPTIONS } from './generate-component'
import { coreFileName, coreName } from '../templates/component/utils'
import genDocumentTemplate from '../templates/component/doc'
import genExampleTemplate from '../templates/component/example'
import logger from './logger'

export default function genDocument(params: any) {
  const { name, title, parts } = params
  const targetDir = resolve(cliConfig.cwd, '../hbui-vue')
  const docsDir = resolve(targetDir, 'docs')
  const mdPath = resolve(docsDir, 'components', coreFileName(name))
  const expPath = resolve(docsDir, 'example', coreFileName(name))

  // 创建组件文档目录
  mkdirSync(mdPath, { recursive: true })

  if (parts.includes('example')) {
    // 创建组件demo目录
    mkdirSync(expPath, { recursive: true })

    const expFilePath = resolve(expPath, coreFileName(name) + '.vue')
    writeFileSync(expFilePath, genExampleTemplate(name), WRITE_FILE_OPTIONS)
  }

  if (parts.length > 0) {
    const mdFilePath = resolve(mdPath, 'index.md')
    writeFileSync(mdFilePath, genDocumentTemplate(name, title), WRITE_FILE_OPTIONS)
  }

  logger.success(`The document "${coreName(name)}" has been generated successfully.`)
}
