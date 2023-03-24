import { shallowMount } from '@vue/test-utils'
import { expect, test, it } from 'vitest'

import { Avatar } from '../index'

test('Avatar test', () => {
  const wrapper = shallowMount(Avatar, {
    props: {}
  })

  it('Avatar demo has created successfully', async () => {
    expect(wrapper).toBeTruthy()
  })
})
