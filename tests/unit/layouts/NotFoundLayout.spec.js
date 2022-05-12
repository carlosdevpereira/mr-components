import { shallowMount } from '@vue/test-utils'
import NotFoundLayout from '@/layouts/NotFoundLayout'

describe('NotFound Layout (404)', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(NotFoundLayout)
	})

	it('renders not found layout container', () => {
		expect(wrapper.get('.mr-layout-404'))
	})

	it('renders not found title', () => {
		const title = wrapper.get('.mr-layout-title')
		expect(title.text()).toBe(wrapper.vm.title)
	})

	it('renders description', () => {
		const description = wrapper.get('.mr-layout-description')
		expect(description.text()).toBe(wrapper.vm.description)
	})
})
