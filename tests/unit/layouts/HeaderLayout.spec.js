import { shallowMount } from '@vue/test-utils'
import HeaderLayout from '@/layouts/HeaderLayout'

describe('Header layout', () => {
	let wrapper

	describe('Sections', () => {
		beforeEach(() => {
			wrapper = shallowMount(HeaderLayout)
		})

		it('renders mr-header-layout container', () => {
			expect(wrapper.find('.mr-header-layout').exists()).toBe(true)
		})

		it('renders mr-header header bar', () => {
			expect(wrapper.find('.mr-header-layout .mr-header').exists()).toBe(true)
		})

		it('renders mr-layout-main body area', () => {
			expect(wrapper.find('.mr-layout-main').exists()).toBe(true)
		})
	})

	describe('Classes', () => {
		beforeEach(() => {
			wrapper = shallowMount(HeaderLayout, {
				props: {
					fixedHeader: true,
				},
			})
		})

		it('renders a fixed header', () => {
			expect(wrapper.find('.mr-header-layout.fixed-header').exists()).toBe(true)
		})
	})

	describe('Slots', () => {
		beforeEach(() => {
			wrapper = shallowMount(HeaderLayout, {
				slots: {
					default: 'default_slot_content',
					header: 'header_slot_content',
				},
			})
		})

		it('renders header slot content', () => {
			const slotContent = wrapper.find('.mr-header').text()
			expect(slotContent).toBe('header_slot_content')
		})

		it('renders default slot content', () => {
			const slotContent = wrapper.find('.mr-layout-main').text()
			expect(slotContent).toBe('default_slot_content')
		})
	})
})
