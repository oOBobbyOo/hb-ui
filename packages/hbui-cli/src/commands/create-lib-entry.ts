import type { CreateCMD } from './create'
import genLibEntry from '../shared/generate-lib-entry'

import logger from '../shared/logger'

export default async function createLibEntryAction(names: string[] = [], cmd: CreateCMD) {
  try {
    genLibEntry()
  } catch (e: any) {
    logger.error(e.message)
  }
}
