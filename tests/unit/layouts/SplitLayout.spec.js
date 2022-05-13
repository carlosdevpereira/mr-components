const { shallowMount } = require('@vue/test-utils')
import SplitLayout from '@/layouts/SplitLayout'

describe('Split Layout', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(SplitLayout, {
			slots: {
				left: 'left_side_content',
				right: 'right_side_content',
			},
		})
	})

	it('renders left section', () => {
		expect(wrapper.get('.mr-layout-left-section'))
	})

	it('renders content inside left section', () => {
		expect(wrapper.get('.mr-layout-left-section').text()).toBe('left_side_content')
	})

	it('renders right section', () => {
		expect(wrapper.get('.mr-layout-right-section'))
	})

	it('renders content inside right section', () => {
		expect(wrapper.get('.mr-layout-right-section').text()).toBe('right_side_content')
	})

	it('applies the inverse class to the container when inverse prop is passed', async () => {
		expect(wrapper.find('.inverse').exists()).toBe(false)
		await wrapper.setProps({ inverse: true })

		expect(wrapper.find('.inverse').exists()).toBe(true)
	})
})
