import { version } from '../../package.json'

export const CWD = process.cwd()
export const VERSION = version

export const CREATE_SUPPORT_TYPES = ['component', 'component-test', 'component-doc']
export const CREATE_UNFINISHED_TYPES = ['component-test', 'component-doc']

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

export const VITEPRESS_SIDEBAR_CATEGORY = ['通用', '导航', '反馈', '数据录入', '数据展示', '布局']
