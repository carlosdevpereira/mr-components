import { shallowMount } from '@vue/test-utils'
import SidebarLayoutWithHeader from '@/layouts/SidebarLayoutWithHeader'
import SidebarLayout from '@/layouts/SidebarLayout'

describe('Sidebar layout With Header', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(SidebarLayoutWithHeader)
	})

	it('renders a sidebar layout component', () => {
		expect(wrapper.findComponent(SidebarLayout).exists()).toBeTruthy()
	})

	it('renders sidebar with fixed layout', async () => {
		await wrapper.setProps({ fixedHeader: true })

		expect(wrapper.find('.fixed-header').exists()).toBeTruthy()
	})
})
