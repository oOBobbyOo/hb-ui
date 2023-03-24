import { writeFileSync } from 'fs-extra'
import { VITEPRESS_SIDEBAR_FILE, UI_DIR, COMPONENT_IGNORE_DIRS, VITEPRESS_SIDEBAR_CATEGORY, WRITE_FILE_OPTIONS, SIDEBAR_FILE_NAME } from './constant'
import { exportComponentsInfo, genSidebarNavs, resolveComponentsInfo } from './utils'
import genSidebarTemplate from '../templates/doc/sidebar'
import logger from './logger'

export default function genSidebar() {
  const categoryMap = VITEPRESS_SIDEBAR_CATEGORY.reduce((map, cate) => map.set(cate, []), new Map())
  const filesInfo = resolveComponentsInfo(UI_DIR, COMPONENT_IGNORE_DIRS)
  const componentsInfo = exportComponentsInfo(filesInfo)
  const genNavs = genSidebarNavs(componentsInfo, categoryMap)

  writeFileSync(VITEPRESS_SIDEBAR_FILE, genSidebarTemplate(genNavs), WRITE_FILE_OPTIONS)

  logger.success(`The vitepress "${SIDEBAR_FILE_NAME}" has been generated successfully.`)
}
