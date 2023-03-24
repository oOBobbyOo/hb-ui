import { resolve } from 'path'
import type { WriteFileOptions } from 'fs'
import { version } from '../../package.json'

export const CWD = process.cwd()
export const VERSION = version
export const IS_PROD = process.env.NODE_ENV === 'production'
export const WRITE_FILE_OPTIONS: WriteFileOptions = { encoding: 'utf-8' }

export const INDEX_FILE_NAME = 'index.ts'
export const VUE_UI_FILE_NAME = 'vue-hbui.ts'
export const COMPONENTS_DIR_NAME = 'components'
export const SRC_DIR_NAME = 'src'
export const TESTS_DIR_NAME = '__test__'
export const DOCS_FILE_NAME = 'index.md'
export const SIDEBAR_FILE_NAME = 'sidebar.ts'
export const COMPONENT_IGNORE_DIRS = ['shared', 'styles', 'styles-var', 'vue-hbui']

export const UI_DIR = resolve(CWD, '../hbui-vue/ui')
export const COMPONENTS_DIR = resolve(UI_DIR, COMPONENTS_DIR_NAME)

export const DOCS_DIR = resolve(CWD, '../hbui-vue/docs')
export const DOCS_COMPONENTS_DIR = resolve(DOCS_DIR, COMPONENTS_DIR_NAME)
export const DOCS_EXAMPLE_DIR = resolve(DOCS_DIR, 'example')
export const VITEPRESS_DIR = resolve(DOCS_DIR, '.vitepress')
export const VITEPRESS_SIDEBAR_FILE = resolve(VITEPRESS_DIR, `config/${SIDEBAR_FILE_NAME}`)

export const CREATE_SUPPORT_TYPES = ['all', 'component', 'component-doc', 'vitepress-sidebar']
export const CREATE_UNFINISHED_TYPES = ['component-test']

export const COMPONENT_PARTS_MAP = [
  {
    name: 'component（组件）',
    value: 'component'
  },
  {
    name: 'directive（指令）',
    value: 'directive'
  },
  {
    name: 'service（服务）',
    value: 'service'
  }
]

export const DOCUMENT_PARTS_MAP = [
  {
    name: 'markdown（组件文档）',
    value: 'markdown'
  },
  {
    name: 'example（组件demo）',
    value: 'example'
  }
]

export const VITEPRESS_SIDEBAR_CATEGORY = ['通用', '导航', '反馈', '数据录入', '数据展示', '布局']
