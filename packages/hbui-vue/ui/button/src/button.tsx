import { defineComponent, toRefs } from 'vue'
import type { SetupContext } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import useButton from './use-button'
import './button.scss'

export default defineComponent({
  name: 'HbButton',
  props: buttonProps,
  setup(props: ButtonProps, ctx: SetupContext) {
    const { disabled, loading } = toRefs(props)
    const { classes } = useButton(props, ctx)

    const onClick = (e: MouseEvent) => {
      if (loading.value) {
        return
      }
      ctx.emit('click', e)
    }

    return () => (
      <button class={classes.value} disabled={disabled.value} onClick={onClick}>
        <span class='button-content'>{ctx.slots.default?.()}</span>
      </button>
    )
  }
})
