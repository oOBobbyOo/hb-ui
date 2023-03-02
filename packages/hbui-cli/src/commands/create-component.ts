import inquirer from 'inquirer'
import type { CreateCMD } from './create'
import { typeName, typeTitle, selectCategory, selectParts } from '../inquiers/components'
import genComponent from '../shared/generate-component'
import logger from '../shared/logger'

export default async function createComponentAction(names: string[] = [], cmd: CreateCMD = {}) {
  const [name = '', title = ''] = names
  let params = {}
  try {
    params = await inquirer.prompt([typeName(name), typeTitle(title), selectCategory(), selectParts()])

    genComponent(params)
  } catch (e: any) {
    logger.error(e.message)
    process.exit(1)
  }
}
