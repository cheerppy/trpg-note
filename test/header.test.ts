import { vi, it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import headerVue from 'components/common/header.vue'

const wrapper = mount(headerVue)

it('has 5 <a> tag', () => {
    expect(wrapper.findAll('a')).toHaveLength(5)
})