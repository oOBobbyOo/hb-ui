# Card 卡片

通用卡片容器。

#### 何时使用

基础卡片容器，其中可包含文字，列表，图片，段落，用于概览展示时。

### 基本用法

:::demo

```vue
<template>
  <hb-card class="card-demo-basic">
    <template #title>HBUI Course</template>
    <template #subtitle class="card-demo-icon"></template>
    <template #content>
      HBUI is a free open-source and common solution for the front end of enterprise mid- and
      back-end products. Its design values are basedon...
    </template>
  </hb-card>
</template>

<style lang="scss">
.card-demo-basic {
  cursor: pointer;

  .card-demo-icon {
    cursor: pointer;
    font-size: 16px;
    margin-right: 8px;
    vertical-align: middle;
  }
  .card-demo-icon + span {
    vertical-align: middle;
  }
  .card-block {
    margin-right: 16px;
    i {
      cursor: pointer;
      font-size: 16px;
      margin-right: 8px;
      vertical-align: middle;
    }
    i + span {
      vertical-align: middle;
    }
  }
  .card-container {
    width: 350px;
  }
  .action-text {
    color: #8a8e99;
  }
}
</style>
```

:::

### 阴影效果

你可以定义什么时候展示卡片的增强阴影效果。

使用 shadow 属性设置卡片增强阴影出现的时机。 可选值：'always'|'hover'|'never'，默认是 hover。

:::demo

```vue
<template>
  <hb-card shadow="always" style="width: 250px">
    <template #content>always</template>
  </hb-card>
</template>
```

:::

### Card 参数

| 参数   | 类型                        | 默认      | 说明                                                         | 跳转 Demo                 |
| :----- | :-------------------------- | :-------- | :----------------------------------------------------------- | :------------------------ |
| src    | `string`                    | ''        | 可选，图片路径                                               | [使用图片](#使用图片)     |
| align  | [IAlignType](#ialigntype)   | `'start'` | 可选，操作区域对齐方式，分别对应起始对齐，尾部对齐，拉伸对齐 | [自定义区域](#自定义区域) |
| shadow | [IShadowType](#ishadowtype) | `'hover'` | 可选，设置增强阴影显示时机                                   | [阴影效果](#阴影效果)     |

### Card 插槽

两种方式使用：`v-slot:title` 或者具名插槽`#title`

| 名称     | 描述                                   |
| :------- | :------------------------------------- |
| avatar   | 头像区域，用作头像等图片展示           |
| title    | 卡片的主要内容描述，一般定义为卡片名称 |
| subtitle | 对标题的补充，可包含标签等信息         |
| actions  | 决策作用，可以包含操作文本或者操作图标 |

### Card 类型定义

#### IAlignType

```ts
type IAlignType = 'start' | 'end' | 'spaceBetween'
```

#### IShadowType

```ts
type IShadowType = 'always' | 'hover' | 'never'
```
