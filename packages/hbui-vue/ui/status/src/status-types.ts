import type { ExtractPropTypes } from 'vue'

export type IStatusType = 'success' | 'error' | 'initial' | 'warning' | 'waiting' | 'running' | 'invalid'

export const statusProps = {
  type: {
    default: 'invalid',
    type: String as () => IStatusType
  }
} as const

export type StatusProps = ExtractPropTypes<typeof statusProps>
