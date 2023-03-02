import { resolve } from 'path'
import { writeFileSync } from 'fs-extra'
import { cliConfig } from './config'
import { WRITE_FILE_OPTIONS } from './generate-component'
import genSidebarTemplate from '../templates/component/sidebar'
import { COMPONENT_IGNORE_DIRS, VITEPRESS_SIDEBAR_CATEGORY } from './constant'
import { exportComponentsInfo, genSidebarNavs, resolveComponentsInfo } from './utils'
import logger from './logger'

export default function genSidebar() {
  const targetDir = resolve(cliConfig.cwd, '../hbui-vue')
  const sidebarPath = resolve(targetDir, 'docs/.vitepress/config')
  const sidebarFilePath = resolve(sidebarPath, 'sidebar.ts')
  const componentDir = resolve(targetDir, 'ui')

  const categoryMap = VITEPRESS_SIDEBAR_CATEGORY.reduce((map, cate) => map.set(cate, []), new Map())
  const filesInfo = resolveComponentsInfo(componentDir, COMPONENT_IGNORE_DIRS)
  const componentsInfo = exportComponentsInfo(filesInfo)
  const genNavs = genSidebarNavs(componentsInfo, categoryMap)

  writeFileSync(sidebarFilePath, genSidebarTemplate(genNavs), WRITE_FILE_OPTIONS)

  logger.success(`The vitepress "sidebar.ts" has been generated successfully.`)
}
