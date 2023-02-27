import inquirer from 'inquirer'

import { CreateCMD } from './create'
import logger from '../shared/logger'
import { typeName, typeTitle, selectCategory, selectParts } from '../inquiers/components'
import genComponent from '../shared/generate-component'

export default async function createComponentAction(names: string[] = [], cmd: CreateCMD = {}) {
  const [name = '', title = ''] = names
  let params = {}
  try {
    params = await inquirer.prompt([
      typeName(name),
      typeTitle(title),
      selectCategory(),
      selectParts()
    ])

    await genComponent(params)
  } catch (e: any) {
    logger.error(e.message)
    process.exit(1)
  }
}
