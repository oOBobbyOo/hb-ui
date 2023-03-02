import { version } from '../../package.json'

export const CWD = process.cwd()
export const VERSION = version

export const CREATE_SUPPORT_TYPES = ['component', 'component-doc', 'vitepress-sidebar']
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

export const COMPONENT_IGNORE_DIRS = ['shared', 'styles', 'styles-var', 'vue-hbui']
