import { defineComponent, useSlots, renderSlot, ref } from 'vue'
import type { SetupContext } from 'vue'
import { fullscreenProps, FullscreenProps } from './fullscreen-types'
import useKeydown from './composables/use-keydown'
import useFullscreen from './composables/use-fullscreen'
import './fullscreen.scss'

export default defineComponent({
  name: 'HbFullscreen',
  props: fullscreenProps,
  emits: ['update:modelValue'] as string[],
  setup(props: FullscreenProps, ctx: SetupContext) {
    const slotElement = ref()

    useFullscreen(props, slotElement, ctx)
    useKeydown(props, ctx)

    return () => {
      const defaultSlot = renderSlot(useSlots(), 'default')
      return <div ref={slotElement}>{defaultSlot}</div>
    }
  }
})
