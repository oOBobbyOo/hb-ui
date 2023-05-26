import type { ExtractPropTypes } from 'vue'

export const overlayProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
