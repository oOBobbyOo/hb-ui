# Button 按钮

按钮是一种命令组件，可发起一个即时操作。

#### 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

### 形态

:::demo 通过`variant`设置按钮形态，目前支持`solid`、`outline`、`text`三种形态，默认为`outline`。

```vue
<template>
  <div class="demo-spacing">
    <hb-button variant="solid">Solid Button</hb-button>
    <hb-button>Outline Button</hb-button>
    <hb-button variant="text">Text Button</hb-button>
  </div>
</template>
```

:::

### 主题色

:::demo 通过`color`设置按钮的主题色，目前支持`primary`、`secondary`、`danger`三种主题色，默认为`secondary`。<br>注意：如果`variant`设置成`solid`，则默认使用`primary`主题色。

```vue
<template>
  <div>
    <div class="demo-spacing">
      <hb-button variant="solid" color="primary">Primary</hb-button>
      <hb-button color="primary">Primary</hb-button>
      <hb-button variant="text" color="primary">Primary</hb-button>
    </div>

    <div class="demo-spacing">
      <hb-button variant="solid" color="secondary">Secondary</hb-button>
      <hb-button color="secondary">Secondary</hb-button>
      <hb-button variant="text" color="secondary">Secondary</hb-button>
    </div>

    <div class="demo-spacing">
      <hb-button variant="solid" color="danger">Danger</hb-button>
      <hb-button color="danger">Danger</hb-button>
      <hb-button variant="text" color="danger">Danger</hb-button>
    </div>
  </div>
</template>
```

:::

### 尺寸

:::demo 通过`size`设置按钮尺寸，支持`sm`、`md`、`lg`三种类型的尺寸，默认为`md`。

```vue
<template>
  <div class="demo-spacing">
    <hb-button size="sm">Small</hb-button>
    <hb-button>Medium</hb-button>
    <hb-button size="lg">Large</hb-button>
  </div>
</template>
```

:::
