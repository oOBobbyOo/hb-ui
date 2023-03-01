import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import HbUITheme from '../hbui-theme'

// @ts-ignore
import HbUI from '@hbui/vue-hbui'

import { registerComponents } from './regComponents.js'

export default {
  ...HbUITheme,
  enhanceApp({ app }) {
    app.use(HbUI)
    registerComponents(app)
  }
}
