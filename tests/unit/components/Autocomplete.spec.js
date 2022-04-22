import { shallowMount } from '@vue/test-utils'
import Autocomplete from '@/components/Autocomplete'
import Input from '@/components/Input'

const fetchMock = jest.fn(() => [1, 2])

describe('Autocomplete', () => {
	let wrapper

	describe('Suggestions', () => {
		beforeEach(() => {
			wrapper = shallowMount(Autocomplete, {
				props: {
					fetch: fetchMock,
				},
			})
		})

		it('shows suggestions area', async () => {
			wrapper.vm.isOpen = true
			await wrapper.vm.$nextTick()

			expect(wrapper.find('.mr-autocomplete').exists()).toBe(true)
		})

		it('hides suggestions area', async () => {
			wrapper.vm.isOpen = true
			await wrapper.vm.$nextTick()

			await wrapper.vm.close()
			await wrapper.vm.$nextTick()

			expect(wrapper.find('.mr-autocomplete').exists()).toBe(false)
		})

		it('searches for results', async () => {
			wrapper.vm.searchValue = 'test'
			await wrapper.vm.$nextTick()

			expect(wrapper.vm.search).toBe('test')
		})
	})

	describe('Input', () => {
		beforeEach(() => {
			wrapper = shallowMount(Autocomplete, {
				props: {
					fetch: fetchMock,
					label: 'autocomplete input',
					icon: 'chat-line-3',
					iconPosition: 'end',
					inline: true,
				},
			})
		})

		it('inherits props by default', () => {
			let input = wrapper.findComponent(Input)

			expect(input.vm.label).toBe('autocomplete input')
			expect(input.vm.icon).toBe('chat-line-3')
			expect(input.vm.iconPosition).toBe('end')
		})

		it('returns the correct classes from computed property', async () => {
			expect(wrapper.vm.classes).toContain('label-input-inline')

			// Loading
			expect(wrapper.vm.classes).not.toContain('loading')
			await wrapper.setData({ loading: true })
			expect(wrapper.vm.classes).toContain('loading')
		})
	})
})
