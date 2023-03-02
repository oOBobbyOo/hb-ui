import { CWD, VERSION, VITEPRESS_SIDEBAR_CATEGORY } from './constant'

export const cliConfig = {
  cwd: CWD,
  componentRootDir: '.',
  componentCategories: VITEPRESS_SIDEBAR_CATEGORY,
  libPrefix: '',
  libStyleFileSuffix: '.scss',
  libClassPrefix: '',
  libEntryRootDir: '.',
  libEntryFileName: 'index',
  version: VERSION
}
