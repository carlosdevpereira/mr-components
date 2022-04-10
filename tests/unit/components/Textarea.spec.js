import Textarea from '@/components/Textarea'
import Icon from '@/components/Icon'
import { shallowMount } from '@vue/test-utils'

describe('Textarea', () => {
	let wrapper

	describe('Attributes', () => {
		describe('rows', () => {
			beforeEach(() => {
				wrapper = shallowMount(Textarea)
			})

			it('when height is `sm` textarea displays 2 rows', async () => {
				await wrapper.setProps({ height: 'sm' })

				expect(wrapper.vm.rows).toBe(2)
			})

			it('when height is `md` textarea displays 4 rows', async () => {
				await wrapper.setProps({ height: 'md' })

				expect(wrapper.vm.rows).toBe(4)
			})

			it('when height is `lg` textarea displays 8 rows', async () => {
				await wrapper.setProps({ height: 'lg' })

				expect(wrapper.vm.rows).toBe(8)
			})
		})

		describe('height', () => {
			describe('when height is fit-content', () => {
				let resizeHandlerFn = jest.spyOn(Textarea.methods, 'setTextareaHeight')

				it('triggers the textarea resize handler function when component is created', async () => {
					resizeHandlerFn.mockClear()

					wrapper = shallowMount(Textarea, {
						props: {
							height: 'fit-content',
						},
					})

					expect(resizeHandlerFn).toHaveBeenCalledTimes(1)
				})

				it('triggers the textarea resize handler function when user writes', async () => {
					wrapper = shallowMount(Textarea, {
						props: {
							height: 'fit-content',
						},
					})

					// clears mock to make sure we validate
					// only the types the function was called
					// after the component was created
					resizeHandlerFn.mockClear()

					await wrapper.find('textarea').trigger('input')

					expect(resizeHandlerFn).toHaveBeenCalledTimes(1)
				})
			})

			describe('when height is not fit-content', () => {
				it("doesn't set textarea style height", async () => {
					wrapper = shallowMount(Textarea, {
						props: {
							height: 'sm',
						},
					})

					expect(wrapper.find('textarea').element.style.height).toBe('')
				})
			})
		})
	})

	describe('States', () => {
		describe('Disabled', () => {
			beforeEach(() => {
				wrapper = shallowMount(Textarea, {
					props: {
						disabled: false,
					},
				})
			})

			it('textarea is not disabled when `disabled` prop is false', () => {
				expect(wrapper.find(".mr-input-container[disabled='true']").exists()).toBeFalsy()
				expect(
					wrapper.find(".mr-input-container textarea[disabled='true']").exists()
				).toBeFalsy()
			})

			it('sets the textarea as disabled when `disabled` prop is true', async () => {
				expect(wrapper.find('label[disabled="true"]').exists()).toBeFalsy()
				expect(wrapper.find('textarea[disabled]').exists()).toBeFalsy()

				await wrapper.setProps({ disabled: true })

				expect(wrapper.find("label[disabled='true']").exists()).toBeTruthy()
				expect(wrapper.find('textarea[disabled]').exists()).toBeTruthy()
			})
		})
	})

	describe('Events', () => {
		beforeEach(() => {
			wrapper = shallowMount(Textarea)
		})

		it('propagates update:model-value event when textarea value changes', () => {
			wrapper.vm.currentValue = true

			expect(wrapper.emitted('update:model-value')).toBeTruthy()
		})
	})

	describe('Classes', () => {
		beforeEach(() => {
			wrapper = shallowMount(Textarea, {
				props: {
					theme: 'outlined',
					variant: 'success',
					size: 'lg',
					icon: 'chat-3-line',
					iconPosition: 'start',
					inline: true,
					notResizable: true,
					notResizableHorizontally: true,
					notResizableVertically: true,
				},
			})
		})

		it('returns the correct classes from computed property', () => {
			expect(wrapper.vm.classes).toContain('outlined-theme')
			expect(wrapper.vm.classes).toContain('variant-success')
			expect(wrapper.vm.classes).toContain('size-lg')
			expect(wrapper.vm.classes).toContain('has-icon')
			expect(wrapper.vm.classes).toContain('icon-position-start')
			expect(wrapper.vm.classes).toContain('inline')
			expect(wrapper.vm.classes).toContain('not-resizable')
			expect(wrapper.vm.classes).toContain('not-resizable-horizontally')
			expect(wrapper.vm.classes).toContain('not-resizable-vertically')
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

		it('sets the correct icon class', () => {
			expect(wrapper.find('.mr-input-container.has-icon').exists()).toBeTruthy()
			expect(wrapper.findComponent(Icon).exists()).toBeTruthy()
			expect(wrapper.findComponent(Icon).vm.name).toBe('chat-3-line')
		})

		it('sets the correct icon position class', async () => {
			expect(wrapper.find('.mr-input-container.icon-position-start').exists()).toBeTruthy()

			await wrapper.setProps({ iconPosition: 'end' })

			expect(wrapper.find('.mr-input-container.icon-position-end').exists()).toBeTruthy()
		})

		it('sets the correct inline class', async () => {
			expect(wrapper.find('.mr-input-container.inline').exists()).toBeTruthy()
		})
	})
})
