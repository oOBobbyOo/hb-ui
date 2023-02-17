import { computed } from 'vue'
import type { SetupContext } from 'vue'
import { ButtonProps, UseButtonReturnType } from './button-types'
import { useNamespace } from '@hooks/use-namespace'
import { isString } from '@utils/index'

export default function useButton(props: ButtonProps, ctx: SetupContext): UseButtonReturnType {
  const ns = useNamespace('button')
  const hasContent = computed(() => ctx.slots.default)
  const colorMap = {
    solid: 'primary',
    outline: 'secondary',
    text: 'secondary'
  }
  const defaultColor = colorMap[props.variant]

  const buttonSize = computed(() => {
    return props.size
  })

  const classes = computed(() => ({
    [ns.b()]: true,
    [ns.m(props.variant)]: true,
    [`${ns.m(props.variant)}--${props.color || defaultColor}`]: true,
    [ns.m(buttonSize.value)]: true,
    [ns.e('icon-wrap')]: props.icon,
    [ns.e('icon')]: props.icon && !hasContent.value,
    [ns.m('is-loading')]: props.loading,
    [ns.m(props.shape || '')]: !!(props.shape && isString(props.shape))
  }))

  return { classes }
}
