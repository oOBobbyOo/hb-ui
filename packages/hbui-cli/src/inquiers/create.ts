import { CREATE_SUPPORT_TYPES } from '../shared/constant'

export const selectCreateType = () => ({
  name: 'type',
  type: 'list',
  message: '（必填）请选择创建类型：',
  choices: CREATE_SUPPORT_TYPES,
  default: 0
})
