import { DOCUMENT_PARTS_MAP } from '../shared/constant'

export const typeName = (name: string) => ({
  name: 'name',
  type: 'input',
  default: name,
  message: '（必填）请输入文档 name ，将用作文档目录及文件名：',
  validate: (value: string) => {
    if (value.trim() === '') {
      return '文档 name 是必填项！'
    }
    return true
  }
})

export const typeTitle = (title: string) => ({
  name: 'title',
  type: 'input',
  default: title,
  message: '（必填）请输入文档中文名称，将用作文档标题显示：',
  validate: (value: string) => {
    if (value.trim() === '') {
      return '文档名称是必填项！'
    }
    return true
  }
})

export const selectParts = () => ({
  name: 'parts',
  type: 'checkbox',
  message: '（必填）请选择包含部件，将自动生成部件文件：',
  choices: DOCUMENT_PARTS_MAP,
  default: [],
  validate: (value: string[]) => {
    if (value.length === 0) {
      return '部件必须包含至少一项'
    }
    return true
  }
})
