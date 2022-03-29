import Pagination from '@/components/Pagination'
import { shallowMount } from '@vue/test-utils'

describe('Pagination', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(Pagination, {
			props: {
				page: 1,
				limit: 10,
				totalCount: 21,
			},
		})
	})

	describe('Pagination range', () => {
		it('shows the correct first item of the current page', () => {
			expect(wrapper.find('.page-first-item').text()).toBe('1')
		})

		it('shows the correct last item of the current page', async () => {
			expect(wrapper.vm.pageLastItem).toBe(10)
			expect(wrapper.find('.page-last-item').text()).toBe('10')

			await wrapper.setProps({ totalCount: 1 })

			expect(wrapper.vm.pageLastItem).toBe(1)
			expect(wrapper.find('.page-last-item').text()).toBe('1')
		})

		it('shows the correct total number of items available', () => {
			expect(wrapper.find('.total-items-count').text()).toBe('21')
		})
	})

	describe('Pagination controls', () => {
		it('shows the correct current page', () => {
			expect(wrapper.find('.current-page').text()).toBe('1')
		})

		it('shows the correct total pages', () => {
			expect(wrapper.find('.total-pages').text()).toBe('3')
		})

		it('shows the go-to-previous-page button when the current page is higher than 1', async () => {
			await wrapper.setProps({ page: 2 })
			expect(wrapper.findComponent('.go-to-previous-page').exists()).toBe(true)
		})

		it('shows the go-to-next-page button when total pages is higher than the current page', () => {
			expect(wrapper.findComponent('.go-to-next-page').exists()).toBe(true)
		})

		it('disables the go-to-previous-page button when current page is 1', () => {
			const previousPageButton = wrapper.findComponent('.go-to-previous-page')

			expect(previousPageButton.attributes('disabled')).toBeTruthy()
		})

		it('disables the go-to-next-page button when current page is the last page', async () => {
			await wrapper.setProps({ page: 3 })

			const nextPageButton = wrapper.findComponent('.go-to-next-page')
			expect(nextPageButton.attributes('disabled')).toBeTruthy()
		})

		it('decrements the page when go-to-previous-page button is clicked', async () => {
			await wrapper.setProps({ page: 2 })

			const previousPageButton = wrapper.findComponent('.go-to-previous-page')
			await previousPageButton.trigger('click')

			expect(wrapper.emitted()['update:page']).toBeTruthy()
			expect(wrapper.emitted()['update:page'][0]).toEqual([1])
		})

		it('increments the page when go-to-next-page button is clicked', async () => {
			const nextPageButton = wrapper.findComponent('.go-to-next-page')
			await nextPageButton.trigger('click')

			expect(wrapper.emitted()['update:page']).toBeTruthy()
			expect(wrapper.emitted()['update:page'][0]).toEqual([2])
		})
	})
})
