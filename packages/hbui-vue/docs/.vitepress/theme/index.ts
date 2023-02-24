import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import type { Theme } from 'vitepress'

import Demo from '../demo/Demo.vue'
import DemoBlock from '../demo/DemoBlock.vue'

import HbUiTheme from '../hbui-theme'

import CardInstall from '../../../ui/card/index'
import ButtonInstall from '../../../ui/button/index'

export default <Theme>{
  ...DefaultTheme,
  ...HbUiTheme,
  enhanceApp({ app }) {
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)

    app.use(CardInstall)
    app.use(ButtonInstall)
  }
}
