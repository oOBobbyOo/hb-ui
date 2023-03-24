import type { App } from 'vue'
import AlertInstall, { Alert } from '../alert'
import AvatarInstall, { Avatar } from '../avatar'
import ButtonInstall, { Button, ButtonGroup } from '../button'
import CardInstall, { Card } from '../card'
import FullscreenInstall, { Fullscreen } from '../fullscreen'
import IconInstall, { Icon } from '../icon'

const installs = [AlertInstall, AvatarInstall, ButtonInstall, IconInstall, CardInstall, FullscreenInstall]

export { Alert, Avatar, Button, ButtonGroup, Card, Fullscreen, Icon }

export default {
  install(app: App): void {
    installs.forEach((p) => app.use(p))
  }
}
