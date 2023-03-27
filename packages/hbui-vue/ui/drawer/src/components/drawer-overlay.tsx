import { defineComponent, Transition } from 'vue'
import type { SetupContext } from 'vue'
import { drawerOverlayProps, DrawerOverlayProps } from '../drawer-types'
import { useNamespace } from '@hooks/use-namespace'
import './drawer-overlay.scss'

export default defineComponent({
  name: 'HbDrawerOverlay',
  props: drawerOverlayProps,
  emits: ['click'] as string[],
  setup(props: DrawerOverlayProps, ctx: SetupContext) {
    const ns = useNamespace('drawer')
    const handleClick = (e: Event) => {
      ctx.emit('click', e)
    }
    return () => <Transition name='drawer-overlay-fade'>{props.visible && <div class={ns.e('overlay')} onClick={handleClick}></div>}</Transition>
  }
})
