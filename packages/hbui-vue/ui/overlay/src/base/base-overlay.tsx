import { defineComponent, renderSlot, Teleport, Transition } from 'vue'
import type { SetupContext } from 'vue'
import { OverlayProps } from './base-overlay-types'
import { useNamespace } from '@hooks/use-namespace'
import './base-overlay.scss'

export default defineComponent({
  name: 'HbOverlay',
  setup(props: OverlayProps, ctx: SetupContext) {
    const ns = useNamespace('overlay')

    return () => (
      <Teleport to='#hb-overlay-anchor'>
        <Transition name={ns.e('fade')}>{renderSlot(ctx.slots, 'default')}</Transition>
      </Teleport>
    )
  }
})
