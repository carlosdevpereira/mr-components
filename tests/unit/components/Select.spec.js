import Select from '@/components/Select'
import { shallowMount } from '@vue/test-utils'

describe('Select', () => {
	let wrapper

	describe('Options', () => {
		beforeAll(() => {
			wrapper = shallowMount(Select, {
				props: {
					options: [
						{ key: 1, name: 'Option 1' },
						{ key: 2, name: 'Option 2' },
					],
				},
			})
		})

		it('shows select options list when select is clicked', async () => {
			await wrapper.find('.mr-select-container').trigger('click')

			const optionList = wrapper.find('.mr-select')
			expect(optionList.exists()).toBeTruthy()
		})

		it('shows correct number of options', () => {
			const options = wrapper.findAll('.mr-select .mr-select-option')
			expect(options.length).toBe(2)
		})

		it('shows the right options text', () => {
			const options = wrapper.findAll('.mr-select .mr-select-option')

			expect(options[0].text()).toBe('Option 1')
			expect(options[1].text()).toBe('Option 2')
		})

		it('updates the value when an option is selected', async () => {
			const options = wrapper.findAll('.mr-select .mr-select-option')
			await options[0].trigger('click')

			expect(wrapper.emitted('update:model-value')).toBeTruthy()
			expect(wrapper.emitted('update:model-value')[0][0].key).toBe(1)
			expect(wrapper.emitted('update:model-value')[0][0].name).toBe('Option 1')
		})

		it('hides select options list after an option is selected', async () => {
			const optionList = wrapper.find('.mr-select')
			expect(optionList.exists()).toBeFalsy()
		})
	})

	describe('Label', () => {
		beforeEach(() => {
			wrapper = shallowMount(Select, {
				props: {
					options: [{ key: 1, name: 'Option 1' }],
				},
			})
		})

		it('shows value of `label` prop when no value is selected', () => {
			expect(wrapper.text()).toContain('Please select an option')
		})

		it('shows the select value name when an option object is selected', async () => {
			await wrapper.setProps({ modelValue: { key: 1, name: 'Option 1' } })

			expect(wrapper.text()).toContain('Option 1')
		})

		it('shows the exact value when not an object', async () => {
			await wrapper.setProps({ modelValue: 'Option 1' })

			expect(wrapper.text()).toContain('Option 1')
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

	describe('Events', () => {
		beforeEach(() => {
			wrapper = shallowMount(Select, {
				props: {
					options: [{ key: 1, name: 'Option 1' }],
				},
			})
		})

		it('propagates update:model-value event when select value changes', () => {
			wrapper.vm.currentValue = true

			expect(wrapper.emitted('update:model-value')).toBeTruthy()
		})
	})

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
})
