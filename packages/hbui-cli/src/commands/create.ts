import inquirer from 'inquirer'
import logger from '../shared/logger'
import { CREATE_SUPPORT_TYPES, CREATE_UNFINISHED_TYPES } from '../shared/constant'
import { selectCreateType } from '../inquiers/create'
import createAllAction from './create-all'
import createComponentAction from './create-component'
import createDocumentAction from './create-doc'
import createLibEntryAction from './create-lib-entry'
import CreateSidebarAction from './create-sidebar'

const CREATE_TYPE_ACTION = {
  all: createAllAction,
  component: createComponentAction,
  'component-doc': createDocumentAction,
  'lib-entry': createLibEntryAction,
  'vitepress-sidebar': CreateSidebarAction
}

export type CreateCMD = {
  config?: string
  type?: keyof typeof CREATE_TYPE_ACTION
  core?: boolean
  service?: boolean
  directive?: boolean
  force?: boolean
}

export function validateCreateType(type: string) {
  const re = new RegExp('^(' + CREATE_SUPPORT_TYPES.map((t) => `(${t})`).join('|') + ')$')
  const flag = re.test(type)

  !flag && logger.error(`类型错误，可选类型为：${CREATE_SUPPORT_TYPES.join(', ')}`)

  return flag ? type : null
}

export async function createAction(names: string[] = [], cmd: CreateCMD = {}) {
  let { type } = cmd

  if (!type) {
    const result = await inquirer.prompt([selectCreateType()])
    type = result.type
  }

  if (CREATE_UNFINISHED_TYPES.includes(type!)) {
    logger.info('抱歉，该功能暂未完成！')
    process.exit(0)
  }

  const action = CREATE_TYPE_ACTION[type!]
  if (action) {
    action(names, cmd)
  } else {
    logger.warn('Sorry! The type is not completed.')
  }
}
