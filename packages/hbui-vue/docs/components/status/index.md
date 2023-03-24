# Status 状态

状态组件

### 何时使用

表示一个任务的执行结果时使用。

### 基本用法

:::demo

```vue
<template>
  <hb-status>Default</hb-status>
  <hb-status type="success">Success</hb-status>
  <hb-status type="error">Error</hb-status>
  <hb-status type="warning">Warning</hb-status>
  <hb-status type="initial">Initial</hb-status>
  <hb-status type="waiting">Waiting</hb-status>
  <hb-status type="running">Running</hb-status>
  <hb-status type="invalid">Invalid</hb-status>
</template>
```

:::

### Status 参数

| 参数 |            类型             |   默认    |    说明    |
| :--: | :-------------------------: | :-------: | :--------: |
| type | [IStatusType](#istatustype) | 'invalid' | 可选，类型 |

### Status 类型定义

#### IStatusType

```ts
type IStatusType = 'success' | 'error' | 'initial' | 'warning' | 'waiting' | 'running' | 'invalid'
```
