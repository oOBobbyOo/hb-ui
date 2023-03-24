import inquirer from 'inquirer'
import type { CreateCMD } from './create'
import { typeName, typeTitle, selectCategory, selectParts } from '../inquiers/all'
import genComponent from '../shared/generate-component'
import genDocument from '../shared/generate-doc'
import genSidebar from '../shared/generate-sidebar'
import generateDts from '../shared/generate-dts'
import genLibEntry from '../shared/generate-lib-entry'
import logger from '../shared/logger'

export default async function createAllAction(names: string[] = [], cmd: CreateCMD = {}) {
  const [name = '', title = ''] = names
  let params = {}
  try {
    params = await inquirer.prompt([typeName(name), typeTitle(title), selectCategory(), selectParts()])

    // 组件
    genComponent(params)
    // 文档
    genDocument(params)
    // 文档导航
    genSidebar()
    // 类型
    generateDts()
    // 入口
    genLibEntry()
  } catch (e: any) {
    logger.error(e.message)
    process.exit(1)
  }
}
