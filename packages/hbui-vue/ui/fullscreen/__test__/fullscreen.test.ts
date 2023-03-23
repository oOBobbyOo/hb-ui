import { shallowMount } from '@vue/test-utils'
import { expect, test, it } from 'vitest'

import { Fullscreen } from '../index'

test('Fullscreen test', () => {
  const wrapper = shallowMount(Fullscreen, {
    props: {}
  })

  it('Fullscreen demo has created successfully', async () => {
    expect(wrapper).toBeTruthy()
  })
})
