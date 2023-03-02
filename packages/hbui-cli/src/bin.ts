#!/usr/bin/env node
import { Command } from 'commander'
import { CREATE_SUPPORT_TYPES } from './shared/constant'
import { createAction, validateCreateType } from './commands/create'
import createDocumentAction from './commands/create-sidebar'

const program = new Command()

program
  .command('create [name...]')
  .description('创建一个组件模板或配置文件')
  .option('-t --type <type>', `创建类型，可选值：${CREATE_SUPPORT_TYPES.join(', ')}`, validateCreateType)
  .option('--core', '创建组件核心文件')
  .option('--service', '创建组件service')
  .option('--directive', '创建组件diretive')
  .option('-f --force', '覆盖原文件', false)
  .option('-e --env <env>', '环境，可选值: dev, prod')
  .action(createAction)

program.command('generate:sidebar').description('生成文档侧边栏导航').action(createDocumentAction)

program.parse(process.argv)
