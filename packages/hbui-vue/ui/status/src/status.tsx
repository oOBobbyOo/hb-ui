import { computed, defineComponent } from 'vue'
import type { SetupContext } from 'vue'
import { statusProps, StatusProps } from './status-types'
import { useNamespace } from '@hooks/use-namespace'
import './status.scss'

export default defineComponent({
  name: 'HbStatus',
  props: statusProps,
  emits: [] as string[],
  setup(props: StatusProps, ctx: SetupContext) {
    const ns = useNamespace('status')

    const typeClass = computed(() => {
      const { type } = props
      const typeStatus = ['success', 'error', 'initial', 'warning', 'waiting', 'running', 'invalid']
      let typeClassStr = `${ns.b()} ${ns.em('bg', 'invalid')}`
      if (typeStatus.includes(type)) {
        typeClassStr = `${ns.b()} ${ns.em('bg', type)}`
      }
      return typeClassStr
    })

    return () => <span class={typeClass.value}>{ctx.slots.default?.()}</span>
  }
})
