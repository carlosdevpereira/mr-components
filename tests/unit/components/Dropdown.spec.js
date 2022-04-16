import Dropdown from '@/components/Dropdown'
import Button from '@/components/Button'
import { shallowMount } from '@vue/test-utils'

describe('Dropdown', () => {
	let wrapper

	describe('States', () => {
		describe('when dropdown is open (data.isOpen is true)', () => {
			beforeEach(() => {
				wrapper = shallowMount(Dropdown, {
					props: {
						label: 'dropdown button',
					},
					data: () => ({
						isOpen: true,
					}),
					slots: {
						default: 'test_dropdown_content',
					},
				})
			})

			it('renders dropdown button', () => {
				expect(wrapper.findComponent(Button).exists()).toBe(true)
			})

			it('renders dropdown', () => {
				expect(wrapper.find('.mr-dropdown').exists()).toBe(true)
			})

			it('renders dropdown content', () => {
				expect(wrapper.find('.mr-dropdown').text()).toBe('test_dropdown_content')
			})
		})

		describe('when dropdown is closed (data.isOpen is false)', () => {
			beforeEach(() => {
				wrapper = shallowMount(Dropdown, {
					props: {
						label: 'dropdown button',
					},
					slots: {
						default: 'test_dropdown_content',
					},
				})
			})

			it('renders dropdown button', () => {
				expect(wrapper.findComponent(Button).exists()).toBe(true)
			})

			it('does not render dropdown', () => {
				expect(wrapper.find('.mr-dropdown').exists()).toBe(false)
			})
		})
	})

	describe('Button', () => {
		beforeEach(() => {
			wrapper = shallowMount(Dropdown, {
				props: {
					label: 'dropdown button',
					theme: 'text-solid',
					icon: 'add-line',
					iconPosition: 'end',
				},
			})
		})

		it('inherits props by default', () => {
			let button = wrapper.findComponent(Button)
			expect(button.vm.label).toBe('dropdown button')
			expect(button.vm.theme).toBe('text-solid')
			expect(button.vm.icon).toBe('add-line')
			expect(button.vm.iconPosition).toBe('end')
		})

		it('opens dropdown when clicked the first time', async () => {
			let button = wrapper.findComponent(Button)
			await button.trigger('click')

			expect(wrapper.vm.isOpen).toBe(true)
		})

		it('closes dropdown when clicked with dropdown already open', async () => {
			let button = wrapper.findComponent(Button)
			await button.trigger('click')
			await button.trigger('click')

			expect(wrapper.vm.isOpen).toBe(false)
		})
	})
})
