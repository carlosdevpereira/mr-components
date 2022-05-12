const { shallowMount } = require('@vue/test-utils')
import Modal from '@/components/modal'

describe('Modal', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(Modal, {
			global: {
				stubs: {
					teleport: true,
				},
			},
		})
	})

	it('hides the modal by default', () => {
		expect(wrapper.find('.mr-modal-container').exists()).toBeFalsy()
	})

	it('opens the modal', async () => {
		wrapper.vm.open()
		await wrapper.vm.$nextTick()
		expect(wrapper.find('.mr-modal-container').exists()).toBeTruthy()
		expect(wrapper.emitted('update:is-open'))
	})

	it('closes the modal', async () => {
		wrapper.vm.open()
		await wrapper.vm.$nextTick()
		expect(wrapper.find('.mr-modal-container').exists()).toBeTruthy()

		wrapper.vm.close()
		await wrapper.vm.$nextTick()
		expect(wrapper.find('.mr-modal-container').exists()).toBeFalsy()
	})

	it('allows to maximize a modal', async () => {
		await wrapper.setProps({ maximizable: true })
		wrapper.vm.open()
		await wrapper.vm.$nextTick()

		let modalContainer = document.createElement('div')
		modalContainer.id = 'modal' + wrapper.vm.uniqueId
		let modalEl = document.createElement('div')
		modalEl.classList.add('mr-modal')
		modalContainer.appendChild(modalEl)

		let spy = jest.spyOn(document, 'getElementById')
		spy.mockReturnValue(modalContainer)

		expect(wrapper.vm.isFullscreen).toBe(false)
		wrapper.get('.fullscreen-toggle').trigger('click')
		await wrapper.vm.$nextTick()
		expect(wrapper.vm.isFullscreen).toBe(true)

		wrapper.get('.fullscreen-toggle').trigger('click')
		await wrapper.vm.$nextTick()
		expect(wrapper.vm.isFullscreen).toBe(false)
	})
})
