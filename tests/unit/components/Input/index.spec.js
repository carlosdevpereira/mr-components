import Input from '@/components/Input'
import { shallowMount } from '@vue/test-utils'

describe('Input', () => {
	let wrapper

	describe('States', () => {
		describe('Disabled', () => {
			beforeEach(() => {
				wrapper = shallowMount(Input, {
					props: {
						disabled: false,
					},
				})
			})

			it('input is not disabled when `disabled` prop is false', () => {
				expect(wrapper.find(".mr-input-container[disabled='true']").exists()).toBeFalsy()
				expect(
					wrapper.find(".mr-input-container input[disabled='true']").exists()
				).toBeFalsy()
			})

			it('sets the input as disabled when `disabled` prop is true', async () => {
				expect(wrapper.find('label[disabled="true"]').exists()).toBeFalsy()
				expect(wrapper.find('input[disabled]').exists()).toBeFalsy()

				await wrapper.setProps({ disabled: true })

				expect(wrapper.find("label[disabled='true']").exists()).toBeTruthy()
				expect(wrapper.find('input[disabled]').exists()).toBeTruthy()
			})
		})
	})

	describe('Events', () => {
		beforeEach(() => {
			wrapper = shallowMount(Input)
		})

		it('propagates update:model-value event when input value changes', () => {
			wrapper.vm.currentValue = true

			expect(wrapper.emitted('update:model-value')).toBeTruthy()
		})
	})

	describe('Classes', () => {
		beforeEach(() => {
			wrapper = shallowMount(Input, {
				props: {
					theme: 'outlined',
					variant: 'success',
					size: 'lg',
				},
			})
		})

		it('returns the correct classes from computed property', () => {
			expect(wrapper.vm.classes).toContain('outlined-theme')
			expect(wrapper.vm.classes).toContain('variant-success')
			expect(wrapper.vm.classes).toContain('size-lg')
		})

		it('sets the correct theme class', () => {
			expect(wrapper.find('.mr-input-container.outlined-theme').exists()).toBeTruthy()
		})

		it('sets the correct variant class', () => {
			expect(wrapper.find('.mr-input-container.variant-success').exists()).toBeTruthy()
		})

		it('sets the correct size class', () => {
			expect(wrapper.find('.mr-input-container.size-lg').exists()).toBeTruthy()
		})
	})
})
