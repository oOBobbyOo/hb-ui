import { resolve } from 'path'
import { mkdirSync, writeFileSync } from 'fs-extra'
import { DOCS_COMPONENTS_DIR, DOCS_EXAMPLE_DIR, DOCS_FILE_NAME, WRITE_FILE_OPTIONS } from './constant'
import { coreFileName } from '../templates/component/utils'
import genDocumentTemplate from '../templates/doc/doc'
import genExampleTemplate from '../templates/doc/example'
import logger from './logger'

export default function genDocument(params: any) {
  const { name, title, parts } = params

  const docsComponentsPath = resolve(DOCS_COMPONENTS_DIR, coreFileName(name))
  const docsExamplepPath = resolve(DOCS_EXAMPLE_DIR, coreFileName(name))

  // 创建文档组件目录
  mkdirSync(docsComponentsPath, { recursive: true })

  if (parts.includes('example')) {
    // 创建文档example目录
    mkdirSync(docsExamplepPath, { recursive: true })

    const expFileName = resolve(docsExamplepPath, coreFileName(name) + '.vue')
    writeFileSync(expFileName, genExampleTemplate(name), WRITE_FILE_OPTIONS)
  }

  if (parts.length > 0) {
    const mdFileName = resolve(docsComponentsPath, DOCS_FILE_NAME)
    writeFileSync(mdFileName, genDocumentTemplate(name, title), WRITE_FILE_OPTIONS)
  }

  logger.success(`The document "${coreFileName(name)}" has been generated successfully.`)
}
