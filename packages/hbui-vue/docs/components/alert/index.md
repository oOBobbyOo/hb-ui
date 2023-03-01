# Alert 警告

显示警告信息，需要用户关注的信息的组件。

### 何时使用

当页面需要向用户发出警告信息时。

### 基本用法

共有四种样式：success、danger、warning、info。

:::demo

alert/type

:::

### 可关闭的提示

显示关闭按钮，点击可关闭提示。

:::demo

alert/closeable

:::

### 不使用默认图标

不使用默认的类型图标。

:::demo

alert/showIcon

:::

### 文字居中

:::demo

alert/center

:::

### Alert 参数

| 参数名       | 类型                    | 默认   | 说明                                    | 跳转 Demo                         |
| :----------- | :---------------------- | :----- | :-------------------------------------- | :-------------------------------- |
| type         | [AlertType](#alerttype) | 'info' | 必选，指定警告提示的样式                | [基本用法](#基本用法)             |
| css-class    | `string`                | --     | 可选，自定义 class 名                   |
| closeable    | `boolean`               | true   | 可选，默认显示关闭按钮                  | [基本用法](#可关闭的提示)         |
| dismiss-time | `number`                | --     | 可选，自动关闭 alert 的延迟时间（`ms`） |
| show-icon    | `boolean`               | true   | 可选，是否使用默认的类型图标            | [不使用默认图标](#不使用默认图标) |
| center       | `boolean`               | false  | 可选，是否使文字居中显示                | [文字居中](#文字居中)             |

### Alert 事件

| 事件名 | 类型                           | 说明                       | 跳转 Demo                     |
| :----- | :----------------------------- | :------------------------- | :---------------------------- |
| close  | `(event?: MouseEvent) => void` | 可选，关闭时触发的回调函数 | [可关闭的提示](#可关闭的提示) |

### Alert 类型定义

#### AlertType

默认值为'info'， 指定 alert 警告提示的类型

```ts
type AlertType = 'success' | 'danger' | 'warning' | 'info' | 'simple'
```
