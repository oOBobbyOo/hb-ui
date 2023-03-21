import { shallowMount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import { Button } from '../index'
import type { IButtonVariant, IButtonColor, IButtonSize } from '..'
import { useNamespace } from '@hooks/use-namespace'

const ns = useNamespace('button', true)
const baseClass = ns.b()
const solidClass = ns.m('solid')
const roundClass = ns.m('round')
const circleClass = ns.m('circle')

const genColorClass = (variant: IButtonVariant, color: IButtonColor) => {
  return `${ns.m(variant)}--${color}`
}

const getSizeClass = (size: IButtonSize) => {
  return ns.m(size)
}

describe('button', () => {
  it('dom', () => {
    const btnText = '确定'
    const wrapper = shallowMount(Button, {
      slots: {
        default: btnText
      }
    })

    // 元素是否存在
    expect(wrapper.find(baseClass).exists()).toBeTruthy()

    // 默认插槽的文本是否正确
    expect(wrapper.text()).toEqual(btnText)
  })

  it('variant', async () => {
    const wrapper = shallowMount(Button, {
      props: { variant: 'solid' }
    })

    expect(wrapper.find(solidClass).exists()).toBeTruthy()
  })

  it('size', async () => {
    const wrapper = shallowMount(Button, {
      props: { size: 'sm' }
    })

    expect(wrapper.find(getSizeClass('sm')).exists()).toBeTruthy()

    await wrapper.setProps({ size: 'lg' })

    expect(wrapper.find(getSizeClass('lg')).exists()).toBeTruthy()
  })

  it('color', async () => {
    const wrapper = shallowMount(Button, { props: {} })
    expect(wrapper.find(genColorClass('outline', 'secondary')).exists()).toBeTruthy()

    await wrapper.setProps({ color: 'primary' })
    expect(wrapper.find(genColorClass('outline', 'primary')).exists()).toBeTruthy()

    await wrapper.setProps({ variant: 'solid', color: 'primary' })
    expect(wrapper.find(genColorClass('solid', 'primary')).exists()).toBeTruthy()

    await wrapper.setProps({ variant: 'text', color: 'danger' })
    expect(wrapper.find(genColorClass('text', 'danger')).exists()).toBeTruthy()
  })

  it('shape round', async () => {
    const wrapper = shallowMount(Button, {
      props: { shape: 'round' }
    })
    expect(wrapper.find(roundClass).exists()).toBeTruthy()
  })

  it('shape circle', async () => {
    const wrapper = shallowMount(Button, {
      props: { shape: 'circle' }
    })
    expect(wrapper.find(circleClass).exists()).toBeTruthy()
  })

  it('disabled', async () => {
    const handleClick = vi.fn()
    const wrapper = shallowMount(Button, {
      props: { disabled: true }
    })

    await wrapper.trigger('click')
    expect(handleClick).not.toBeCalled()
  })
})
