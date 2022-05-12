import { shallowMount } from '@vue/test-utils'
import DialogComponent from '@/components/Dialog'
import { Dialog } from '@/plugins/Dialog'

describe('Dialog', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(DialogComponent, {
			global: {
				stubs: { teleport: true },
			},
		})

		global.innerWidth = 1280
		global.dispatchEvent(new Event('resize'))
	})

	it('applies the correct mobile transitions', async () => {
		global.innerWidth = 900
		global.dispatchEvent(new Event('resize'))

		await wrapper.vm.$nextTick()

		expect(wrapper.vm.mobileTransitions().translateY).toBe(100)
	})

	it('applies a custom icon', async () => {
		Dialog.success({ title: 'dialog_title', message: 'dialog_message', icon: 'test_icon' })
		await wrapper.vm.$nextTick()

		const icon = wrapper.findComponent('.mr-dialog-icon')
		expect(icon.vm.name).toBe('test_icon')

		wrapper.vm.destroy()
	})

	describe('Variants', () => {
		describe('Success Dialog', () => {
			beforeEach(async () => {
				Dialog.success({ title: 'dialog_title', message: 'dialog_message' })
				await wrapper.vm.$nextTick()
			})

			afterEach(() => {
				wrapper.vm.destroy()
			})

			it('renders success dialog variant', async () => {
				expect(wrapper.get('.variant-success'))
			})

			it('renders success icon', async () => {
				const icon = wrapper.findComponent('.mr-dialog-icon')
				expect(icon.vm.name).toBe('check-line')
			})
		})

		describe('Info Dialog', () => {
			beforeEach(async () => {
				Dialog.info({ title: 'dialog_title', message: 'dialog_message' })
				await wrapper.vm.$nextTick()
			})

			afterEach(() => {
				wrapper.vm.destroy()
			})

			it('renders info dialog variant', async () => {
				expect(wrapper.get('.variant-info'))
			})

			it('renders info icon', async () => {
				const icon = wrapper.findComponent('.mr-dialog-icon')
				expect(icon.vm.name).toBe('information-line')
			})
		})

		describe('Danger Dialog', () => {
			beforeEach(async () => {
				Dialog.danger({ title: 'dialog_title', message: 'dialog_message' })
				await wrapper.vm.$nextTick()
			})

			afterEach(() => {
				wrapper.vm.destroy()
			})

			it('renders danger dialog variant', async () => {
				expect(wrapper.get('.variant-danger'))
			})

			it('renders danger icon', async () => {
				const icon = wrapper.findComponent('.mr-dialog-icon')
				expect(icon.vm.name).toBe('alarm-warning-line')
			})
		})

		describe('Warning Dialog', () => {
			beforeEach(async () => {
				Dialog.warning({ title: 'dialog_title', message: 'dialog_message' })
				await wrapper.vm.$nextTick()
			})

			afterEach(() => {
				wrapper.vm.destroy()
			})

			it('renders warning dialog variant', async () => {
				expect(wrapper.get('.variant-warning'))
			})

			it('renders warning icon', async () => {
				const icon = wrapper.findComponent('.mr-dialog-icon')
				expect(icon.vm.name).toBe('error-warning-line')
			})
		})
	})

	describe('Callbacks', () => {
		let onCancelFn = jest.fn()
		let onConfirmFn = jest.fn()

		beforeEach(async () => {
			Dialog.success({
				title: 'dialog_title',
				message: 'dialog_message',
				onCancel: onCancelFn,
				onConfirm: onConfirmFn,
			})
			await wrapper.vm.$nextTick()
		})

		afterEach(() => {
			onCancelFn.mockClear()
			onConfirmFn.mockClear()
		})

		it('triggers cancel callback when cancel button is clicked', async () => {
			wrapper.findComponent('.mr-dialog-cancel').vm.$emit('click')
			await wrapper.vm.$nextTick()

			expect(onCancelFn).toHaveBeenCalledTimes(1)
		})

		it('triggers confirm callback when confirm button is clicked', async () => {
			wrapper.findComponent('.mr-dialog-confirm').vm.$emit('click')
			await wrapper.vm.$nextTick()

			expect(onConfirmFn).toHaveBeenCalledTimes(1)
		})
	})
})
