import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './styles/index.scss'

import CardInstall from '../../../ui/card'
import ButtonInstall from '../../../ui/button'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(CardInstall)
    ctx.app.use(ButtonInstall)
    useComponents(ctx.app)
  }
}
