import type { App } from 'vue'
import { FixedOverlay } from './src/fixed-overlay'
import { inBrowser } from '@utils/common-var'

export * from './src/fixed-overlay/fixed-overlay-types'

export { FixedOverlay }

export default {
  title: 'Overlay 遮罩层',
  category: '通用',
  status: '50%',
  install(app: App) {
    app.component(FixedOverlay.name, FixedOverlay)

    if (inBrowser && !document.getElementById('hb-overlay-anchor')) {
      const overlayAnchor = document.createElement('div')
      overlayAnchor.setAttribute('id', 'hb-overlay-anchor')
      overlayAnchor.style.position = 'fixed'
      overlayAnchor.style.left = '0'
      overlayAnchor.style.top = '0'
      overlayAnchor.style.zIndex = '1000'
      document.body.appendChild(overlayAnchor)
    }
  }
}
