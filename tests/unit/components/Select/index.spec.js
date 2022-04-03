import Select from '@/components/Select'
import Icon from '@/components/Icon'
import { shallowMount } from '@vue/test-utils'

describe('Select', () => {
	let wrapper

	describe('Classes', () => {
		beforeEach(() => {
			wrapper = shallowMount(Select, {
				props: {
					theme: 'outlined',
					variant: 'success',
					size: 'lg',
					options: [{ key: 1, name: 'Option 1' }],
				},
			})
		})

		it('returns the correct classes from computed property', () => {
			expect(wrapper.vm.classes).toContain('outlined-theme')
			expect(wrapper.vm.classes).toContain('variant-success')
			expect(wrapper.vm.classes).toContain('size-lg')
			expect(wrapper.vm.classes).not.toContain('state-opened')
		})

		it('sets the correct theme class', () => {
			expect(wrapper.find('.mr-select-container.outlined-theme').exists()).toBeTruthy()
		})

		it('sets the correct variant class', () => {
			expect(wrapper.find('.mr-select-container.variant-success').exists()).toBeTruthy()
		})

		it('sets the correct size class', () => {
			expect(wrapper.find('.mr-select-container.size-lg').exists()).toBeTruthy()
		})

		it('sets the correct class when select is opened', async () => {
			await wrapper.setData({ visible: true })

			expect(wrapper.find('.mr-select-container.state-opened').exists()).toBeTruthy()
		})
	})

	describe('States', () => {
		describe('Disabled', () => {
			beforeEach(() => {
				wrapper = shallowMount(Select, {
					props: {
						disabled: false,
						options: [{ key: 1, name: 'Option 1' }],
					},
				})
			})

			it('select is not disabled when `disabled` prop is false', () => {
				expect(wrapper.find(".mr-select-container[disabled='true']").exists()).toBeFalsy()
			})

			it('sets the select as disabled when `disabled` prop is true', async () => {
				expect(wrapper.find('label[disabled="true"]').exists()).toBeFalsy()

				await wrapper.setProps({ disabled: true })

				expect(wrapper.find("label[disabled='true']").exists()).toBeTruthy()
			})

			it('sets the select as disabled when no options are provided', async () => {
				expect(wrapper.find('label[disabled="true"]').exists()).toBeFalsy()

				await wrapper.setProps({ options: [] })

				expect(wrapper.find("label[disabled='true']").exists()).toBeTruthy()
			})
		})
	})
})
