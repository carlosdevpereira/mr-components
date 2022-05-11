import { shallowMount } from '@vue/test-utils'
import SidebarLayout from '@/layouts/SidebarLayout'

describe('Sidebar layout', () => {
	let wrapper

	describe('Sections', () => {
		beforeEach(() => {
			wrapper = shallowMount(SidebarLayout)

			global.innerWidth = 1280
			global.dispatchEvent(new Event('resize'))
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

		it('renders sidebar toggle button', () => {
			expect(wrapper.find('.mr-sidebar-toggle').exists()).toBe(true)
		})

		it('toggles sidebar when toggle button is clicked', async () => {
			const toggleButton = wrapper.get('.mr-sidebar-toggle')
			toggleButton.trigger('click')

			await wrapper.vm.$nextTick()

			expect(wrapper.find('.sidebar-is-open').exists()).toBeTruthy()
		})

		it('uses the correct transitions', () => {
			expect(wrapper.vm.customTransitions.translateX).not.toBeUndefined()
			expect(wrapper.vm.customTransitions.translateX).toBe('-100%')
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

	describe('Mobile', () => {
		beforeEach(() => {
			wrapper = shallowMount(SidebarLayout)

			global.innerWidth = 500
			global.dispatchEvent(new Event('resize'))
		})

		it('doesnt render mr-sidebar when menu is hidden', () => {
			const sidebar = wrapper.get('.mr-sidebar-layout').find('.mr-sidebar')

			expect(sidebar.exists()).toBeFalsy()
		})

		it('renders mr-sidebar when menu is toggled on', async () => {
			const toggleButton = wrapper.get('.mr-sidebar-toggle')
			toggleButton.trigger('click')

			await wrapper.vm.$nextTick()

			const sidebar = wrapper.get('.mr-sidebar-layout').find('.mr-sidebar')
			expect(sidebar.exists()).toBeTruthy()
		})

		it('hides mr-sidebar when menu is toggled off', async () => {
			const toggleButton = wrapper.get('.mr-sidebar-toggle')
			toggleButton.trigger('click')

			await wrapper.vm.$nextTick()

			let sidebar = wrapper.get('.mr-sidebar-layout').find('.mr-sidebar')
			expect(sidebar.exists()).toBeTruthy()

			toggleButton.trigger('click')

			await wrapper.vm.$nextTick()

			sidebar = wrapper.get('.mr-sidebar-layout').find('.mr-sidebar')
			expect(sidebar.exists()).toBeFalsy()
		})

		it('uses the correct transitions', () => {
			expect(wrapper.vm.customTransitions.translateY).not.toBeUndefined()
			expect(wrapper.vm.customTransitions.translateY).toBe('100%')
		})
	})
})
