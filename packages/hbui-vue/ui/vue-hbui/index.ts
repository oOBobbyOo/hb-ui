import type { App } from 'vue'
import AlertInstall, { Alert } from '../alert'
import ButtonInstall, { Button, ButtonGroup } from '../button'
import IconInstall, { Icon } from '../icon'
import CardInstall, { Card } from '../card'

const installs = [AlertInstall, ButtonInstall, IconInstall, CardInstall]

export { Alert, Button, ButtonGroup, Icon, Card }

export default {
  install(app: App): void {
    installs.forEach((p) => app.use(p))
  }
}
