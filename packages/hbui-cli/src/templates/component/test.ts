import { coreName } from './utils'

export default function genTestTemplate(name: string) {
  return `\
import { shallowMount } from '@vue/test-utils'
import { expect, test, it } from 'vitest'

import { ${coreName(name)} } from '../index'

test('${coreName(name)} test', () => {
  const wrapper = shallowMount(${coreName(name)}, {
    props: {}
  })

  it('${coreName(name)} demo has created successfully', async () => {
    expect(wrapper).toBeTruthy()
  })
})
`
}
