import type { App } from 'vue'

import AlertInstall, { Alert } from './alert'
import AvatarInstall, { Avatar } from './avatar'
import ButtonInstall, { Button, ButtonGroup } from './button'
import CardInstall, { Card } from './card'
import FullscreenInstall, { Fullscreen } from './fullscreen'
import IconInstall, { Icon } from './icon'
import StatusInstall, { Status } from './status'

const installs = [AlertInstall, AvatarInstall, ButtonInstall, CardInstall, FullscreenInstall, IconInstall, StatusInstall]

export { Alert, Avatar, Button, ButtonGroup, Card, Fullscreen, Icon, Status }

export default {
  version: '1.0.0',
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
