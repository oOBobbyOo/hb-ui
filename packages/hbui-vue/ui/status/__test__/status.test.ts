import { shallowMount } from '@vue/test-utils'
import { expect, test, it } from 'vitest'

import { Status } from '../index'

test('Status test', () => {
  const wrapper = shallowMount(Status, {
    props: {}
  })

  it('Status demo has created successfully', async () => {
    expect(wrapper).toBeTruthy()
  })
})
