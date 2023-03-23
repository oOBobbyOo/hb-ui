import type { App } from 'vue'
import AlertInstall, { Alert } from '../alert'
import ButtonInstall, { Button, ButtonGroup } from '../button'
import CardInstall, { Card } from '../card'
import FullscreenInstall, { Fullscreen } from '../fullscreen'
import IconInstall, { Icon } from '../icon'

const installs = [AlertInstall, ButtonInstall, IconInstall, CardInstall, FullscreenInstall]

export { Alert, Button, ButtonGroup, Card, Fullscreen, Icon }

export default {
  install(app: App): void {
    installs.forEach((p) => app.use(p))
  }
}
