#!/usr/bin/env node
import { Command } from 'commander'

import { CREATE_SUPPORT_TYPES } from './shared/constant'
import { createAction, validateCreateType } from './commands/create'

const program = new Command()

program
  .command('create [name...]')
  .description('创建一个组件模板或配置文件')
  .option(
    '-t --type <type>',
    `创建类型，可选值：${CREATE_SUPPORT_TYPES.join(', ')}`,
    validateCreateType
  )
  .option('-e --env <env>', '环境，可选值: dev, prod')
  .option('--ignore-parse-error', '忽略解析错误', false)
  .option('--cover', '覆盖原文件', false)
  .action(createAction)

program.parse(process.argv)
