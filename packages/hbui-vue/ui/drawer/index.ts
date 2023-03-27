import type { App } from 'vue'
import Drawer from './src/drawer'

export * from './src/drawer-types'

export { Drawer }

export default {
  title: 'Drawer 抽屉板',
  category: '反馈',
  status: '100%',
  install(app: App) {
    app.component(Drawer.name, Drawer)
  }
}
