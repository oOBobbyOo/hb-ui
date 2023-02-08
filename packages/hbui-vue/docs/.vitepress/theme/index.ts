import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'

// import HBUI from '../../../ui/@hb/ui'

import CardInstall from '../../../ui/card/index'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(CardInstall)
    useComponents(ctx.app)
  }
}
