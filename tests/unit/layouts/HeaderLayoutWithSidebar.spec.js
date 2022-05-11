import { shallowMount } from '@vue/test-utils'
import HeaderLayoutWithSidebar from '@/layouts/HeaderLayoutWithSidebar'
import HeaderLayout from '@/layouts/HeaderLayout'

describe('Header Layout with Sidebar', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(HeaderLayoutWithSidebar)
	})

	it('renders a header layout component', () => {
		expect(wrapper.findComponent(HeaderLayout).exists()).toBeTruthy()
	})

	it('renders header layout fixed', async () => {
		await wrapper.setProps({ fixedHeader: true, fixedSidebar: true, sidebarFilled: true })

		expect(wrapper.find('.fixed-header').exists()).toBeTruthy()
		expect(wrapper.find('.fixed-sidebar').exists()).toBeTruthy()
		expect(wrapper.find('.sidebar-filled').exists()).toBeTruthy()
	})
})
