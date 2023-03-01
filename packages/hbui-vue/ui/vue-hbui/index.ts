import type { App } from 'vue'
import AlertInstall, { Alert } from '../alert'
import ButtonInstall, { Button, ButtonGroup } from '../button'
import CardInstall, { Card } from '../card'

const installs = [AlertInstall, ButtonInstall, CardInstall]

export { Alert, Button, ButtonGroup, Card }

export default {
  install(app: App): void {
    installs.forEach((p) => app.use(p))
  }
}
