import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import type { Theme } from 'vitepress'

import HbUITheme from '../hbui-theme'

// @ts-ignore
import Demo from '../demo/Demo.vue'
// @ts-ignore
import DemoBlock from '../demo/DemoBlock.vue'
// @ts-ignore
import HbUI from '@hbui/vue-hbui'

export default <Theme>{
  ...DefaultTheme,
  ...HbUITheme,
  enhanceApp({ app }) {
    app.use(HbUI)

    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}
