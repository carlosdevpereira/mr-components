import { shallowMount } from '@vue/test-utils'
import ToastComponent from '@/components/Toast'
import { Toast } from '@/plugins/Toast'

describe('Toast', () => {
	describe('Variants', () => {
		describe('Success Toast', () => {
			let wrapper

			beforeEach(async () => {
				wrapper = shallowMount(ToastComponent, {
					global: {
						stubs: { teleport: true },
					},
				})

				Toast.success({ title: 'toast_title', message: 'toast_message' })
				await wrapper.vm.$nextTick()
			})

			afterEach(() => {
				wrapper.vm.destroy(Toast.notifications[0])
			})

			it('renders success toast variant', async () => {
				expect(wrapper.get('.variant-success'))
			})

			it('renders success icon', async () => {
				const icon = wrapper.findComponent('.mr-toast-icon')
				expect(icon.vm.name).toBe('check-line')
			})
		})

		describe('Warning Toast', () => {
			let wrapper

			beforeEach(async () => {
				wrapper = shallowMount(ToastComponent, {
					global: {
						stubs: { teleport: true },
					},
				})

				Toast.warn({ title: 'toast_title', message: 'toast_message' })
				await wrapper.vm.$nextTick()
			})

			afterEach(() => {
				wrapper.vm.destroy(Toast.notifications[0])
			})

			it('renders warning toast variant', async () => {
				expect(wrapper.get('.variant-warning'))
			})

			it('renders warning icon', async () => {
				const icon = wrapper.findComponent('.mr-toast-icon')
				expect(icon.vm.name).toBe('error-warning-line')
			})
		})

		describe('Danger Toast', () => {
			let wrapper

			beforeEach(async () => {
				wrapper = shallowMount(ToastComponent, {
					global: {
						stubs: { teleport: true },
					},
				})

				Toast.alert({ title: 'toast_title', message: 'toast_message' })
				await wrapper.vm.$nextTick()
			})

			afterEach(() => {
				wrapper.vm.destroy(Toast.notifications[0])
			})

			it('renders danger toast variant', async () => {
				expect(wrapper.get('.variant-danger'))
			})

			it('renders danger icon', async () => {
				const icon = wrapper.findComponent('.mr-toast-icon')
				expect(icon.vm.name).toBe('alarm-warning-line')
			})
		})

		describe('Info Toast', () => {
			let wrapper

			beforeEach(async () => {
				wrapper = shallowMount(ToastComponent, {
					global: {
						stubs: { teleport: true },
					},
				})

				Toast.info({ title: 'toast_title', message: 'toast_message' })
				await wrapper.vm.$nextTick()
			})

			afterEach(() => {
				wrapper.vm.destroy(Toast.notifications[0])
				wrapper.vm.destroy(Toast.notifications[-1])
			})

			it('renders info toast variant', async () => {
				expect(wrapper.get('.variant-info'))
			})

			it('renders info icon', async () => {
				const icon = wrapper.findComponent('.mr-toast-icon')
				expect(icon.vm.name).toBe('information-line')
			})
		})
	})

	describe('Transitions', () => {
		let wrapper

		beforeEach(async () => {
			wrapper = shallowMount(ToastComponent, {
				global: {
					stubs: { teleport: true },
				},
			})

			Toast.success({ title: 'toast_title', message: 'toast_message' })
			await wrapper.vm.$nextTick()
		})

		it('uses correct transition depending on the position of the toast', async () => {
			await wrapper.setProps({ position: 'top-left' })
			expect(wrapper.vm.transitionDetails.translateX).toBe(-200)

			await wrapper.setProps({ position: 'top-right' })
			expect(wrapper.vm.transitionDetails.translateX).toBe(200)

			await wrapper.setProps({ position: 'top-center' })
			expect(wrapper.vm.transitionDetails.translateY).toBe(-200)

			await wrapper.setProps({ position: 'bottom-left' })
			expect(wrapper.vm.transitionDetails.translateX).toBe(-200)

			await wrapper.setProps({ position: 'bottom-center' })
			expect(wrapper.vm.transitionDetails.translateY).toBe(200)

			await wrapper.setProps({ position: 'bottom-right' })
			expect(wrapper.vm.transitionDetails.translateX).toBe(200)
		})
	})
})
