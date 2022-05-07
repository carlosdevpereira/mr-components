import { InfiniteScroll } from '@/directives/InfiniteScroll'

let targetEl = {
	addEventListener: jest.fn(),
	removeEventListener: jest.fn(),
}
const bindingFn = jest.fn()

describe('Infinite Scroll', () => {
	it('exports the `mounted` function', () => {
		expect(InfiniteScroll.mounted).toBeTruthy()
		expect(typeof InfiniteScroll.mounted).toBe('function')
	})

	it('exports the `unmounted` function', () => {
		expect(InfiniteScroll.unmounted).toBeTruthy()
		expect(typeof InfiniteScroll.unmounted).toBe('function')
	})

	describe('when component is mounted', () => {
		beforeEach(() => {
			bindingFn.mockClear()
			InfiniteScroll.mounted(targetEl, { value: bindingFn, arg: 100 })
		})

		afterEach(() => {
			InfiniteScroll.unmounted(targetEl)
		})

		it('creates the onScroll handler function', () => {
			expect(typeof targetEl.onScroll).toBe('function')
		})

		it('registers scroll event listener', () => {
			expect(targetEl.addEventListener).toHaveBeenCalled()
			expect(targetEl.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function))
		})

		it('calls callback function when scroll is near the end', async () => {
			await targetEl.onScroll({
				srcElement: {
					scrollTop: 400,
					scrollHeight: 500,
					clientHeight: 0,
				},
			})

			expect(bindingFn).toHaveBeenCalled()
			expect(bindingFn).toHaveBeenCalledTimes(1)
		})

		it('calls callback function when scroll is in the end', async () => {
			await targetEl.onScroll({
				srcElement: {
					scrollTop: 500,
					scrollHeight: 500,
					clientHeight: 0,
				},
			})

			expect(bindingFn).toHaveBeenCalled()
			expect(bindingFn).toHaveBeenCalledTimes(1)
		})

		it('does not call callback function when scroll far from the end', async () => {
			await targetEl.onScroll({
				srcElement: {
					scrollTop: 50,
					scrollHeight: 500,
					clientHeight: 0,
				},
			})

			expect(bindingFn).not.toHaveBeenCalled()
		})
	})

	describe('when component is unmounted', () => {
		beforeEach(() => {
			bindingFn.mockClear()
			InfiniteScroll.mounted(targetEl, { value: bindingFn })
			InfiniteScroll.unmounted(targetEl)
		})

		it('removes event listener', async () => {
			expect(targetEl.removeEventListener).toHaveBeenCalled()
			expect(targetEl.removeEventListener).toHaveBeenCalledWith(
				'scroll',
				expect.any(Function)
			)
		})
	})
})
