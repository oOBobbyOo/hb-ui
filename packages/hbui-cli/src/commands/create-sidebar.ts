import type { CreateCMD } from './create'
import genSidebar from '../shared/generate-sidebar'
import logger from '../shared/logger'

export default async function createSidebarAction(names: string[] = [], cmd: CreateCMD = {}) {
  try {
    genSidebar()
  } catch (e: any) {
    logger.error(e.message)
    process.exit(1)
  }
}
