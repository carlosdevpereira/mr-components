import Message from '@/components/Message'
import Icon from '@/components/Icon'
import { shallowMount } from '@vue/test-utils'

describe('Message', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(Message)
	})

	it('throws error when trying to open modal without a title', async () => {
		try {
			await wrapper.vm.show()
		} catch (error) {
			expect(error.message).toContain('Title')
			expect(error.message).toContain('required')
		}
	})

	it('renders message with title', async () => {
		await wrapper.vm.show('message_title')

		expect(wrapper.find('.mr-message-title').text()).toBe('message_title')
	})

	it('renders message body when present', async () => {
		await wrapper.vm.show('message_title', 'message_body')

		expect(wrapper.find('.mr-message-body').text()).toBe('message_body')
	})

	it("doesn't render message body when not present", async () => {
		await wrapper.vm.show('message_title')

		expect(wrapper.find('.mr-message-body').exists()).toBe(false)
	})

	it('renders close button when message is closeable', async () => {
		await wrapper.vm.show('message_title')
		await wrapper.setProps({ closeable: true })

		expect(wrapper.find('.mr-message-close-trigger').exists()).toBe(true)
	})

	it('hides the message when close button is clicked', async () => {
		await wrapper.vm.show('message_title')
		await wrapper.setProps({ closeable: true })

		const closeMessageButton = wrapper.find('.mr-message-close-trigger')
		await closeMessageButton.trigger('click')

		expect(wrapper.vm.isVisible).toBe(false)
		expect(wrapper.emitted()['update:is-visible']).not.toBeUndefined()
	})

	it("doesn't render close button when message is not closeable", async () => {
		await wrapper.vm.show('message_title')

		expect(wrapper.find('.mr-message-close-trigger').exists()).toBe(false)
	})

	describe('Icons', () => {
		describe('when icon is passed in by the icon prop', () => {
			beforeEach(async () => {
				await wrapper.vm.show('message_title')
				await wrapper.setProps({ icon: 'icon-name' })
			})

			it('renders the Icon component', () => {
				expect(wrapper.findComponent(Icon).exists()).toBe(true)
			})

			it('passes the icon prop value as the Icon name', () => {
				expect(wrapper.findComponent(Icon).vm.name).toBe('icon-name')
			})
		})

		describe('when icon prop is not defined', () => {
			beforeEach(async () => {
				await wrapper.vm.show('message_title')
			})

			it('renders success Icon when variant is success', async () => {
				await wrapper.setProps({ variant: 'success' })
				expect(wrapper.findComponent(Icon).exists()).toBe(true)
				expect(wrapper.findComponent(Icon).vm.name).toBe('check-line')
			})

			it('renders info Icon when variant is info', async () => {
				await wrapper.setProps({ variant: 'info' })
				expect(wrapper.findComponent(Icon).exists()).toBe(true)
				expect(wrapper.findComponent(Icon).vm.name).toBe('information-line')
			})

			it('renders warning Icon when variant is warning', async () => {
				await wrapper.setProps({ variant: 'warning' })
				expect(wrapper.findComponent(Icon).exists()).toBe(true)
				expect(wrapper.findComponent(Icon).vm.name).toBe('error-warning-line')
			})

			it('renders danger Icon when variant is danger', async () => {
				await wrapper.setProps({ variant: 'danger' })
				expect(wrapper.findComponent(Icon).exists()).toBe(true)
				expect(wrapper.findComponent(Icon).vm.name).toBe('alarm-warning-line')
			})
		})
	})

	describe('Classes', () => {
		it('applies the correct variant class', async () => {
			wrapper = shallowMount(Message, {
				props: { variant: 'danger' },
			})
			await wrapper.vm.show('message_title')

			expect(wrapper.find('.mr-message').classes()).toContain('variant-danger')
		})
	})
})
