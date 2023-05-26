import { shallowMount } from '@vue/test-utils'
import { expect, test, it } from 'vitest'

import { Overlay } from '../index'

test('Overlay test', () => {
  const wrapper = shallowMount(Overlay, {
    props: {}
  })

  it('Overlay demo has created successfully', async () => {
    expect(wrapper).toBeTruthy()
  })
})
