import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import Demo from '../demo/Demo.vue'
import DemoBlock from '../demo/DemoBlock.vue'
import './styles/index.scss'

import CardInstall from '../../../ui/card/index'
import ButtonInstall from '../../../ui/button/index'

export default <Theme>{
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)

    app.use(CardInstall)
    app.use(ButtonInstall)
  }
}
