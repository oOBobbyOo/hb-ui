import { cliConfig } from '../../shared/config'
import { coreName } from '../component/utils'

export default function genDocTemplate(name: string, title: string) {
  return `\
# ${coreName(name)} ${title}

// todo 组件描述

### 何时使用

// todo 使用时机描述

### 基本用法

// todo 用法描述

:::demo todo 展开代码的内部描述

\`\`\`vue
<template>

</template>

<script setup>

</script>

<style lang="${cliConfig.libStyleFileSuffix.slice(1)}">

</style>
\`\`\`

:::

### ${coreName(name)}

 ${coreName(name)} 参数

| 参数 | 类型 | 默认 | 说明 | 跳转 Demo | 全局配置项 |
| ---- | ---- | ---- | ---- | --------- | --------- |
|      |      |      |      |           |           |
|      |      |      |      |           |           |
|      |      |      |      |           |           |

 ${coreName(name)} 事件

| 事件 | 类型 | 说明 | 跳转 Demo |
| ---- | ---- | ---- | --------- |
|      |      |      |           |
|      |      |      |           |
|      |      |      |           |
`
}
