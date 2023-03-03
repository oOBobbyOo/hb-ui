import type { CreateCMD } from './create'
import generateDts from '../shared/generate-dts'
import logger from '../shared/logger'

export default async function createDtsAction(names: string[] = [], cmd: CreateCMD = {}) {
  try {
    generateDts()
  } catch (e: any) {
    logger.error(e.message)
    process.exit(1)
  }
}
