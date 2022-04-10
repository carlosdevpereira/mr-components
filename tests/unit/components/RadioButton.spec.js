import RadioButton from '@/components/RadioButton'
import { shallowMount } from '@vue/test-utils'

describe('Radio Button', () => {
	let wrapper

	describe('Events', () => {
		beforeEach(() => {
			wrapper = shallowMount(RadioButton)
		})

		it('propagates update:modelValue event when radio button value changes', () => {
			wrapper.vm.currentValue = true

			expect(wrapper.emitted('update:model-value')).toBeTruthy()
		})
	})

	describe('Classes', () => {
		beforeEach(() => {
			wrapper = shallowMount(RadioButton, {
				props: {
					variant: 'success',
					size: 'lg',
				},
			})
		})

		it('returns the correct classes from computed property', async () => {
			expect(wrapper.vm.labelClasses).toContain('variant-success')
			expect(wrapper.vm.labelClasses).toContain('size-lg')
			expect(wrapper.vm.labelClasses).not.toContain('disabled')

			await wrapper.setProps({ disabled: true })
			expect(wrapper.vm.labelClasses).toContain('disabled')
		})

		it('sets the correct variant class', () => {
			expect(wrapper.find('.mr-radio-container.variant-success').exists()).toBeTruthy()
		})

		it('sets the correct size class', () => {
			expect(wrapper.find('.mr-radio-container.size-lg').exists()).toBeTruthy()
		})

		it('sets the correct disabled class', async () => {
			await wrapper.setProps({ disabled: true })

			expect(wrapper.find('.mr-radio-container.disabled').exists()).toBeTruthy()
		})
	})
})
