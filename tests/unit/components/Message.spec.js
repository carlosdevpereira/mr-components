import Message from '@/components/Message'
import Icon from '@/components/Icon'
import { shallowMount } from '@vue/test-utils'

describe('Message', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(Message, {
			props: {
				title: 'message_title',
			},
		})
	})

	it('renders message title', () => {
		expect(wrapper.find('.mr-message-title').text()).toBe('message_title')
	})

	it('renders message body when present', async () => {
		await wrapper.setProps({ body: 'message_body' })

		expect(wrapper.find('.mr-message-body').text()).toBe('message_body')
	})

	it("doesn't render message body when not present", () => {
		expect(wrapper.find('.mr-message-body').exists()).toBe(false)
	})

	it('renders close button when message is closeable', async () => {
		await wrapper.setProps({ closeable: true })

		expect(wrapper.find('.mr-message-close-trigger').exists()).toBe(true)
	})

	it('emits close event when message close button is clicked', async () => {
		await wrapper.setProps({ closeable: true })

		const closeMessageButton = wrapper.find('.mr-message-close-trigger')
		await closeMessageButton.trigger('click')

		expect(wrapper.emitted()['close']).not.toBeUndefined()
	})

	it("doesn't render close button when message is not closeable", () => {
		expect(wrapper.find('.mr-message-close-trigger').exists()).toBe(false)
	})

	describe('Icons', () => {
		describe('when icon is passed in by the icon prop', () => {
			beforeEach(async () => {
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
		it('applies the correct variant class', () => {
			wrapper = shallowMount(Message, {
				props: { variant: 'danger' },
			})

			expect(wrapper.find('.mr-message').classes()).toContain('variant-danger')
		})
	})
})
