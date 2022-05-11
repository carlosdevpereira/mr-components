import { shallowMount } from '@vue/test-utils'
import SidebarLayout from '@/layouts/SidebarLayout'

describe('Sidebar layout', () => {
	let wrapper

	describe('Sections', () => {
		beforeEach(() => {
			wrapper = shallowMount(SidebarLayout)
		})

		it('renders mr-sidebar-layout container', () => {
			expect(wrapper.find('.mr-sidebar-layout').exists()).toBe(true)
		})

		it('renders mr-sidebar header bar', () => {
			expect(wrapper.find('.mr-sidebar-layout .mr-sidebar').exists()).toBe(true)
		})

		it('renders mr-layout-main body area', () => {
			expect(wrapper.find('.mr-layout-main').exists()).toBe(true)
		})
	})

	describe('Slots', () => {
		beforeEach(() => {
			wrapper = shallowMount(SidebarLayout, {
				slots: {
					default: 'default_slot_content',
					sidebar: 'sidebar_slot_content',
				},
			})
		})

		it('renders sidebar slot content', () => {
			const slotContent = wrapper.find('.mr-sidebar').text()
			expect(slotContent).toBe('sidebar_slot_content')
		})

		it('renders default slot content', () => {
			const slotContent = wrapper.find('.mr-layout-main').text()
			expect(slotContent).toBe('default_slot_content')
		})
	})
})
