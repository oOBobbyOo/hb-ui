import { resolve } from 'path'
import { writeFileSync } from 'fs-extra'
import genLibEntryTemplate from '../templates/lib-entry'
import { UI_DIR, VUE_UI_FILE_NAME, COMPONENT_IGNORE_DIRS, WRITE_FILE_OPTIONS } from './constant'
import { exportComponentsMeta, resolveComponentsInfo } from './utils'
import logger from './logger'

export default async function genLibEntry() {
  const entryPathFile = resolve(UI_DIR, VUE_UI_FILE_NAME)

  const filesInfo = resolveComponentsInfo(UI_DIR, COMPONENT_IGNORE_DIRS)
  const componentsMeta = exportComponentsMeta(filesInfo)

  writeFileSync(entryPathFile, genLibEntryTemplate(componentsMeta), WRITE_FILE_OPTIONS)

  logger.success(`The component library entry file has been generated successfully.`)
  logger.info(`Target file: ${entryPathFile}`)
}
