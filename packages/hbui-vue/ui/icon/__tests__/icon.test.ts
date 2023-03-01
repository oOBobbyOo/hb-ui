import { shallowMount } from '@vue/test-utils'
import { expect, test, it } from 'vitest'

import { Icon } from '../index'

test('Icon test', () => {
  const wrapper = shallowMount(Icon, {
    props: {}
  })

  it('Icon demo has created successfully', async () => {
    expect(wrapper).toBeTruthy()
  })
})
