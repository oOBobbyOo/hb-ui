import type { CreateCMD } from './create'
import genVitepressSidebar from '../shared/generate-sidebar'
import logger from '../shared/logger'

export default async function createDocumentAction(names: string[] = [], cmd: CreateCMD = {}) {
  try {
    genVitepressSidebar()
  } catch (e: any) {
    logger.error(e.message)
    process.exit(1)
  }
}
