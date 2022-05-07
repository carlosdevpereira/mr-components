import { ClickOutside } from '@/directives/ClickOutside'

let targetEl = {
	contains: jest.fn(),
}
const bindingFn = jest.fn()

describe('Click Outside', () => {
	it('exports the `mounted` function', () => {
		expect(ClickOutside.mounted).toBeTruthy()
		expect(typeof ClickOutside.mounted).toBe('function')
	})

	it('exports the `unmounted` function', () => {
		expect(ClickOutside.unmounted).toBeTruthy()
		expect(typeof ClickOutside.unmounted).toBe('function')
	})

	describe('when component is mounted', () => {
		beforeEach(() => {
			bindingFn.mockClear()
			ClickOutside.mounted(targetEl, { value: bindingFn })
		})

		afterEach(() => {
			ClickOutside.unmounted(targetEl)
		})

		it('creates the clickOutsideEvent function', () => {
			expect(typeof targetEl.clickOutsideEvent).toBe('function')
		})

		it('triggers callback when document is clicked', async () => {
			await document.dispatchEvent(new Event('click', { event: { target: {} } }))

			expect(bindingFn).toHaveBeenCalled()
		})
	})

	describe('when component is unmounted', () => {
		beforeEach(() => {
			bindingFn.mockClear()
			ClickOutside.mounted(targetEl, { value: bindingFn })
			ClickOutside.unmounted(targetEl)
		})

		it('does not trigger callback when document is clicked', async () => {
			await document.dispatchEvent(new Event('click', { event: { target: {} } }))

			expect(bindingFn).not.toHaveBeenCalled()
		})
	})
})
