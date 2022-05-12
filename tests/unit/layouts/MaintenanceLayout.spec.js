import { shallowMount } from '@vue/test-utils'
import MaintenanceLayout from '@/layouts/MaintenanceLayout'
import Button from '@/components/Button'

describe('Maintenance Layout (503)', () => {
	let wrapper
	let windowOpenSpy
	beforeEach(() => {
		windowOpenSpy = jest.spyOn(window, 'open')
		windowOpenSpy.mockImplementation(() => {})

		wrapper = shallowMount(MaintenanceLayout, {
			props: {
				contactAddress: 'example@example.com',
			},
		})
	})

	it('renders layout container', () => {
		expect(wrapper.get('.mr-layout-maintenance'))
	})

	it('renders title', () => {
		const title = wrapper.get('.mr-layout-title')
		expect(title.text()).toBe(wrapper.vm.title)
	})

	it('renders description', () => {
		const description = wrapper.get('.mr-layout-description')
		expect(description.text()).toBe(wrapper.vm.description)
	})

	it('renders contact button', () => {
		const button = wrapper.findComponent(Button)
		expect(button.exists()).toBe(true)
	})

	it('contact button triggers email client window', async () => {
		const button = wrapper.getComponent(Button)
		await button.vm.$emit('click')

		expect(windowOpenSpy).toHaveBeenCalled()
		expect(windowOpenSpy).toHaveBeenCalledWith(`mailto:example@example.com`)
	})
})
