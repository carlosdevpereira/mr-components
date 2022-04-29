import { shallowMount } from '@vue/test-utils'
import Autocomplete from '@/components/Autocomplete'
import Input from '@/components/Input'

jest.useFakeTimers()

const simpleItemsString = ['item 1', 'item 2']
const simpleItemsObject = [
	{ key: 1, name: 'item 1' },
	{ key: 2, name: 'item 2' },
]
const getSimpleItemsObjectMock = jest.fn(() => simpleItemsObject)

describe('Autocomplete', () => {
	let wrapper

	describe('Suggestions', () => {
		describe('Local Items', () => {
			describe('When suggestions are objects', () => {
				beforeEach(() => {
					wrapper = shallowMount(Autocomplete, {
						props: {
							items: simpleItemsObject,
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

				describe('when user types on the input field', () => {
					beforeEach(async () => {
						const searchInputComponent = wrapper.findComponent(Input)
						searchInputComponent.vm.$emit('update:model-value', 'item')

						await wrapper.vm.$nextTick()
					})

					it('updates the search string with the new value', async () => {
						expect(wrapper.vm.search).toBe('item')
					})

					it('sets the autocomplete state to loading', () => {
						expect(wrapper.vm.loading).toBe(true)
					})

					it('shows the suggestions after searching is finished', async () => {
						jest.runOnlyPendingTimers()
						expect(wrapper.vm.isOpen).toBe(true)

						await wrapper.vm.$nextTick()
						expect(wrapper.findAll('.mr-autocomplete-option').length).toBe(2)
					})

					it('renders correct text in each suggestion item', async () => {
						jest.runOnlyPendingTimers()
						expect(wrapper.vm.isOpen).toBe(true)

						await wrapper.vm.$nextTick()
						const suggestionItems = wrapper.findAll('.mr-autocomplete-option')
						expect(suggestionItems[0].text()).toBe('item 1')
						expect(suggestionItems[1].text()).toBe('item 2')
					})

					it('sets the autocomplete loading state to false', async () => {
						jest.runOnlyPendingTimers()

						expect(wrapper.vm.loading).toBe(false)
					})

					it('re-opens the suggestions when input has value and is focused', async () => {
						await wrapper.vm.close()
						await wrapper.vm.$nextTick()
						expect(wrapper.vm.isOpen).toBe(false)

						const searchInputComponent = wrapper.findComponent(Input)
						searchInputComponent.vm.$emit('focus')
						expect(wrapper.vm.isOpen).toBe(true)
					})

					describe('when no suggestion item starts with the written value', () => {
						beforeEach(async () => {
							const searchInputComponent = wrapper.findComponent(Input)
							searchInputComponent.vm.$emit('update:model-value', '1')

							await wrapper.vm.$nextTick()
						})

						it('updates the search string with the new value', async () => {
							expect(wrapper.vm.search).toBe('1')
						})

						it('sets the autocomplete state to loading', () => {
							expect(wrapper.vm.loading).toBe(true)
						})

						it('shows the suggestions after searching is finished', async () => {
							jest.runOnlyPendingTimers()
							expect(wrapper.vm.isOpen).toBe(true)

							await wrapper.vm.$nextTick()
							expect(wrapper.findAll('.mr-autocomplete-option').length).toBe(1)
						})

						it('renders correct text in each suggestion item', async () => {
							jest.runOnlyPendingTimers()
							expect(wrapper.vm.isOpen).toBe(true)

							await wrapper.vm.$nextTick()
							const suggestionItems = wrapper.findAll('.mr-autocomplete-option')
							expect(suggestionItems[0].text()).toBe('item 1')
						})

						it('sets the autocomplete loading state to false', async () => {
							jest.runOnlyPendingTimers()

							expect(wrapper.vm.loading).toBe(false)
						})

						it('re-opens the suggestions when input has value and is focused', async () => {
							await wrapper.vm.close()
							await wrapper.vm.$nextTick()
							expect(wrapper.vm.isOpen).toBe(false)

							const searchInputComponent = wrapper.findComponent(Input)
							searchInputComponent.vm.$emit('focus')
							expect(wrapper.vm.isOpen).toBe(true)
						})
					})
				})
			})

			describe('When suggestions are strings', () => {
				beforeEach(() => {
					wrapper = shallowMount(Autocomplete, {
						props: {
							items: simpleItemsString,
						},
					})
				})

				describe('when user types on the input field', () => {
					beforeEach(async () => {
						const searchInputComponent = wrapper.findComponent(Input)
						searchInputComponent.vm.$emit('update:model-value', 'item')

						await wrapper.vm.$nextTick()
					})

					it('updates the search string with the new value', async () => {
						expect(wrapper.vm.search).toBe('item')
					})

					it('sets the autocomplete state to loading', () => {
						expect(wrapper.vm.loading).toBe(true)
					})

					it('shows the suggestions after searching is finished', async () => {
						jest.runOnlyPendingTimers()
						expect(wrapper.vm.isOpen).toBe(true)

						await wrapper.vm.$nextTick()
						expect(wrapper.findAll('.mr-autocomplete-option').length).toBe(2)
					})

					it('renders correct text in each suggestion item', async () => {
						jest.runOnlyPendingTimers()
						expect(wrapper.vm.isOpen).toBe(true)

						await wrapper.vm.$nextTick()
						const suggestionItems = wrapper.findAll('.mr-autocomplete-option')
						expect(suggestionItems[0].text()).toBe('item 1')
						expect(suggestionItems[1].text()).toBe('item 2')
					})

					it('sets the autocomplete loading state to false', async () => {
						jest.runOnlyPendingTimers()

						expect(wrapper.vm.loading).toBe(false)
					})

					it('re-opens the suggestions when input has value and is focused', async () => {
						await wrapper.vm.close()
						await wrapper.vm.$nextTick()
						expect(wrapper.vm.isOpen).toBe(false)

						const searchInputComponent = wrapper.findComponent(Input)
						searchInputComponent.vm.$emit('focus')
						expect(wrapper.vm.isOpen).toBe(true)
					})

					describe('when no suggestion item starts with the written value', () => {
						beforeEach(async () => {
							const searchInputComponent = wrapper.findComponent(Input)
							searchInputComponent.vm.$emit('update:model-value', '1')

							await wrapper.vm.$nextTick()
						})

						it('updates the search string with the new value', async () => {
							expect(wrapper.vm.search).toBe('1')
						})

						it('sets the autocomplete state to loading', () => {
							expect(wrapper.vm.loading).toBe(true)
						})

						it('shows the suggestions after searching is finished', async () => {
							jest.runOnlyPendingTimers()
							expect(wrapper.vm.isOpen).toBe(true)

							await wrapper.vm.$nextTick()
							expect(wrapper.findAll('.mr-autocomplete-option').length).toBe(1)
						})

						it('renders correct text in each suggestion item', async () => {
							jest.runOnlyPendingTimers()
							expect(wrapper.vm.isOpen).toBe(true)

							await wrapper.vm.$nextTick()
							const suggestionItems = wrapper.findAll('.mr-autocomplete-option')
							expect(suggestionItems[0].text()).toBe('item 1')
						})

						it('sets the autocomplete loading state to false', async () => {
							jest.runOnlyPendingTimers()

							expect(wrapper.vm.loading).toBe(false)
						})

						it('re-opens the suggestions when input has value and is focused', async () => {
							await wrapper.vm.close()
							await wrapper.vm.$nextTick()
							expect(wrapper.vm.isOpen).toBe(false)

							const searchInputComponent = wrapper.findComponent(Input)
							searchInputComponent.vm.$emit('focus')
							expect(wrapper.vm.isOpen).toBe(true)
						})
					})
				})
			})

			describe('when suggestions are from un-supported type', () => {
				beforeEach(() => {
					wrapper = shallowMount(Autocomplete, {
						props: {
							items: [1, 2],
						},
					})
				})

				describe('when user types on the input field', () => {
					beforeEach(async () => {
						const searchInputComponent = wrapper.findComponent(Input)
						searchInputComponent.vm.$emit('update:model-value', 'item')

						await wrapper.vm.$nextTick()
					})

					it('updates the search string with the new value', async () => {
						expect(wrapper.vm.search).toBe('item')
					})

					it('sets the autocomplete state to loading', () => {
						expect(wrapper.vm.loading).toBe(true)
					})

					it("doesn't show the suggestions", async () => {
						jest.runOnlyPendingTimers()
						expect(wrapper.vm.isOpen).toBe(false)

						await wrapper.vm.$nextTick()
						expect(wrapper.findAll('.mr-autocomplete-option').length).toBe(0)
					})

					it('sets the autocomplete loading state to false', async () => {
						jest.runOnlyPendingTimers()

						expect(wrapper.vm.loading).toBe(false)
					})

					it("doesn't re-open the suggestions when input has value and is focused", async () => {
						await wrapper.vm.close()
						await wrapper.vm.$nextTick()
						expect(wrapper.vm.isOpen).toBe(false)

						const searchInputComponent = wrapper.findComponent(Input)
						searchInputComponent.vm.$emit('focus')
						expect(wrapper.vm.isOpen).toBe(false)
					})
				})
			})
		})

		describe('Remote Items', () => {
			beforeEach(() => {
				wrapper = shallowMount(Autocomplete, {
					props: {
						getItems: getSimpleItemsObjectMock,
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

			describe('when user types on the input field', () => {
				beforeEach(async () => {
					const searchInputComponent = wrapper.findComponent(Input)
					searchInputComponent.vm.$emit('update:model-value', 'item')

					await wrapper.vm.$nextTick()
				})

				it('updates the search string with the new value', async () => {
					expect(wrapper.vm.search).toBe('item')
				})

				it('sets the autocomplete state to loading', () => {
					expect(wrapper.vm.loading).toBe(true)
				})

				it('calls the get-items handler', async () => {
					jest.runOnlyPendingTimers()

					expect(getSimpleItemsObjectMock).toHaveBeenCalledTimes(1)

					await wrapper.vm.$nextTick()
					expect(wrapper.vm.remoteItems.length).toBe(2)
				})

				it('re-opens the suggestions when input has value and is focused', async () => {
					await wrapper.vm.close()
					jest.runOnlyPendingTimers()

					await wrapper.vm.$nextTick()
					expect(wrapper.vm.isOpen).toBe(false)

					const searchInputComponent = wrapper.findComponent(Input)
					searchInputComponent.vm.$emit('focus')
					expect(wrapper.vm.isOpen).toBe(true)
				})
			})

			describe('when autocomplete is lazy', () => {
				beforeEach(async () => {
					getSimpleItemsObjectMock.mockClear()

					await wrapper.setProps({ lazy: true })

					const searchInputComponent = wrapper.findComponent(Input)
					searchInputComponent.vm.$emit('update:model-value', 'item')

					await wrapper.vm.$nextTick()
				})

				it('calls the get-items handler', async () => {
					jest.runOnlyPendingTimers()

					expect(getSimpleItemsObjectMock).toHaveBeenCalledTimes(1)
					expect(getSimpleItemsObjectMock).toHaveBeenCalledWith(expect.anything(), {
						page: 1,
						limit: 10,
					})

					await wrapper.vm.$nextTick()
					expect(wrapper.vm.remoteItems.length).toBe(2)
				})
			})
		})

		describe('when a suggestion is selected', () => {
			beforeEach(async () => {
				wrapper = shallowMount(Autocomplete, {
					props: {
						items: simpleItemsObject,
					},
				})

				const searchInputComponent = wrapper.findComponent(Input)
				searchInputComponent.vm.$emit('update:model-value', 'item')
				jest.runOnlyPendingTimers()
				await wrapper.vm.$nextTick()

				const suggestionItems = wrapper.findAll('.mr-autocomplete-option')
				suggestionItems[0].trigger('click', { layerY: 100 })
			})

			it('emits update:model-value when a suggestion is clicked', async () => {
				expect(wrapper.emitted()['update:model-value']).not.toBeUndefined()
				expect(wrapper.emitted()['update:model-value'][1][0].name).toBe('item 1')
			})

			it('saves the position of the scroll', async () => {
				// passed a mocked layerY = 100 in the click event trigger
				// the logic is to always scroll to the layerY - 70px
				expect(wrapper.vm.savedPosition).toBe(30)
			})

			it('closes the suggestions panel', async () => {
				expect(wrapper.vm.isOpen).toBe(false)
			})
		})
	})

	describe('Input', () => {
		beforeEach(() => {
			wrapper = shallowMount(Autocomplete, {
				props: {
					items: simpleItemsObject,
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

			expect(wrapper.vm.classes).not.toContain('loading')
			await wrapper.setData({ loading: true })
			expect(wrapper.vm.classes).toContain('loading')
		})

		it('renders simple text', async () => {
			await wrapper.setProps({ modelValue: 'test_input_text' })

			const inputComponent = wrapper.findComponent(Input)
			expect(inputComponent.vm.modelValue).toBe('test_input_text')
		})

		it('renders advanced option text', async () => {
			await wrapper.setProps({ modelValue: { name: 'advanced_input_text' } })

			const inputComponent = wrapper.findComponent(Input)
			expect(inputComponent.vm.modelValue).toBe('advanced_input_text')
		})
	})

	describe('Directives', () => {
		describe('Infinite Scroll', () => {
			beforeEach(() => {
				wrapper = shallowMount(Autocomplete, {
					props: {
						items: simpleItemsObject,
					},
				})
			})

			it('starts in page 1', () => {
				expect(wrapper.vm.page).toBe(1)
			})

			it('increments the page when scroll reaches the bottom', () => {
				wrapper.vm.reachedBottom()

				expect(wrapper.vm.page).toBe(2)
			})
		})
	})
})
