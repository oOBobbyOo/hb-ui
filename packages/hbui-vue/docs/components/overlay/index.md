# Overlay 遮罩层

遮罩层属于基础组件，用于构建独立于当前页面布局的组件。

何时使用

### 何时使用

当你需要全局弹窗，或者需要元素跟随功能，便可以使用该组件。

### 固定遮罩层

:::demo

```vue
<template>
  <hb-button @click="visible = !visible">显示遮罩层</hb-button>
  <hb-fixed-overlay v-model="visible" :lock-scroll="false" class="demo-fixed-overlay-bg">
    <div class="demo-fixed-overlay-container">Hello HbUI!</div>
  </hb-fixed-overlay>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)

    return { visible }
  }
})
</script>

<style>
.demo-fixed-overlay-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 20vh;
  background: #fff;
  color: #000;
}

.demo-fixed-overlay-bg {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```

:::

### FixedOverlay 参数

| 参数名                 | 类型      | 默认  | 说明                     | 跳转 Demo                 |
| :--------------------- | :-------- | :---- | :----------------------- | :------------------------ |
| v-model                | `boolean` | false | 可选，遮罩层是否可见     | [固定遮罩层](#固定遮罩层) |
| lock-scroll            | `boolean` | true  | 可选，是否锁定背景滚动   |                           |
| close-on-click-overlay | `boolean` | true  | 可选，是否点击遮罩层关闭 |                           |
