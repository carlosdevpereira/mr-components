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
