import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Spinner from '@/components/Spinner'
import { shallowMount } from '@vue/test-utils'

describe('Button', () => {
	let wrapper

	describe('Icons', () => {
		beforeEach(() => {
			wrapper = shallowMount(Button, {
				props: {
					icon: 'chat-1-line',
				},
			})
		})

		it('renders the icon', () => {
			let iconComponent = wrapper.findComponent(Icon)

			expect(iconComponent.exists()).toBeTruthy()
		})

		it('renders the correct icon', () => {
			let iconComponent = wrapper.findComponent(Icon)

			expect(iconComponent.vm.name).toBe('chat-1-line')
		})

		it('renders the icon by default in the left side of the button', () => {
			let iconComponent = wrapper.findComponent(Icon)

			expect(iconComponent.classes()).toContain('icon-position-start')
		})

		it('renders the icon in the right side of the button', async () => {
			await wrapper.setProps({ iconPosition: 'end' })

			let iconComponent = wrapper.findComponent(Icon)

			expect(iconComponent.classes()).toContain('icon-position-end')
		})
	})

	describe('Classes', () => {
		beforeEach(() => {
			wrapper = shallowMount(Button, {
				props: {
					theme: 'outlined',
					variant: 'success',
					size: 'lg',
				},
			})
		})

		it('returns the correct classes from computed property', () => {
			expect(wrapper.vm.classes).toContain('outlined-theme')
			expect(wrapper.vm.classes).toContain('variant-success')
			expect(wrapper.vm.classes).toContain('size-lg')
		})

		it('sets the correct theme class', () => {
			expect(wrapper.find('button.outlined-theme').exists()).toBeTruthy()
		})

		it('sets the correct variant class', () => {
			expect(wrapper.find('button.variant-success').exists()).toBeTruthy()
		})

		it('sets the correct size class', () => {
			expect(wrapper.find('button.size-lg').exists()).toBeTruthy()
		})
	})

	describe('States', () => {
		describe('disabled', () => {
			beforeEach(() => {
				wrapper = shallowMount(Button, {
					props: {
						disabled: false,
					},
				})
			})

			it('button is not disabled when `disabled` prop is false', async () => {
				expect(wrapper.find('button[disabled]').exists()).toBeFalsy()
			})

			it('sets the button as disabled when `disabled` prop is true', async () => {
				expect(wrapper.find('button[disabled]').exists()).toBeFalsy()

				await wrapper.setProps({ disabled: true })

				expect(wrapper.find('button[disabled]').exists()).toBeTruthy()
			})
		})

		describe('loading', () => {
			beforeEach(() => {
				wrapper = shallowMount(Button, {
					props: {
						loading: false,
					},
				})
			})

			it('button is not in loading state when `loading` prop is false', async () => {
				expect(wrapper.find('button.is-loading').exists()).toBeFalsy()
			})

			it('sets the button as loading when `loading` prop is true', async () => {
				expect(wrapper.find('button.is-loading').exists()).toBeFalsy()

				await wrapper.setProps({ loading: true })

				expect(wrapper.find('button.is-loading').exists()).toBeTruthy()
			})

			it('renders spinner component when button is in loading state', async () => {
				await wrapper.setProps({ loading: true })

				expect(wrapper.findComponent(Spinner).exists()).toBe(true)
			})
		})
	})
})
