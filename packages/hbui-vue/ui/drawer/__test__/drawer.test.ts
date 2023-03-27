import { shallowMount } from '@vue/test-utils'
import { expect, test, it } from 'vitest'

import { Drawer } from '../index'

test('Drawer test', () => {
  const wrapper = shallowMount(Drawer, {
    props: {}
  })

  it('Drawer demo has created successfully', async () => {
    expect(wrapper).toBeTruthy()
  })
})
