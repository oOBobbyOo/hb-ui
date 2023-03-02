import inquirer from 'inquirer'
import type { CreateCMD } from './create'
import { typeName, typeTitle, selectParts } from '../inquiers/document'
import genDocument from '../shared/generate-doc'
import logger from '../shared/logger'

export default async function createDocumentAction(names: string[] = [], cmd: CreateCMD = {}) {
  const [name = '', title = ''] = names
  let params = {}
  try {
    params = await inquirer.prompt([typeName(name), typeTitle(title), selectParts()])

    genDocument(params)
  } catch (e: any) {
    logger.error(e.message)
    process.exit(1)
  }
}
