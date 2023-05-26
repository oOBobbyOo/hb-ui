import type { App } from 'vue'

import AlertInstall, { Alert } from './alert'
import AvatarInstall, { Avatar } from './avatar'
import ButtonInstall, { Button, ButtonGroup } from './button'
import CardInstall, { Card } from './card'
import DrawerInstall, { Drawer } from './drawer'
import FullscreenInstall, { Fullscreen } from './fullscreen'
import IconInstall, { Icon } from './icon'
import OverlayInstall, { FixedOverlay } from './overlay'
import StatusInstall, { Status } from './status'

const installs = [AlertInstall, AvatarInstall, ButtonInstall, CardInstall, DrawerInstall, FullscreenInstall, IconInstall, OverlayInstall, StatusInstall]

export { Alert, Avatar, Button, ButtonGroup, Card, Drawer, Fullscreen, Icon, FixedOverlay, Status }

export default {
  version: '1.0.0',
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
