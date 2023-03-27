import { resolve } from 'path'
import { outputFileSync } from 'fs-extra'
import { UI_DIR, WRITE_FILE_OPTIONS } from './constant'
import genDtsTemplate from '../templates/component/dts'
import logger from './logger'

export default function generateDts() {
  const dtsFilename = resolve(UI_DIR, '../build/index.d.ts')

  outputFileSync(dtsFilename, genDtsTemplate(), WRITE_FILE_OPTIONS)

  logger.success(`The "index.d.ts" has been generated successfully.`)
}
