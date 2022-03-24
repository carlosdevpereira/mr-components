import Checkbox from '@/components/Checkbox'
import { shallowMount } from '@vue/test-utils'

describe('Checkbox', () => {
    let wrapper

    describe('Events', () => {
        beforeEach(() => {
            wrapper = shallowMount(Checkbox)
        })

        it('propagates update:modelValue event when checkbox value changes', () => {
            wrapper.vm.currentValue = true

            expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        })
    })

    describe('Classes', () => {
        beforeEach(() => {
            wrapper = shallowMount(Checkbox, {
                props: {
                    theme: 'outlined',
                    variant: 'success',
                    size: 'lg',
                },
            })
        })

        it('returns the correct classes from computed property', async () => {
            expect(wrapper.vm.classes).toContain('outlined-theme')
            expect(wrapper.vm.classes).toContain('variant-success')
            expect(wrapper.vm.labelClasses).toContain('size-lg')
            expect(wrapper.vm.labelClasses).not.toContain('disabled')

            await wrapper.setProps({ disabled: true })
            expect(wrapper.vm.labelClasses).toContain('disabled')
        })

        it('sets the correct theme class', () => {
            expect(wrapper.find('input[type="checkbox"].outlined-theme').exists()).toBeTruthy()
        })

        it('sets the correct variant class', () => {
            expect(wrapper.find('input[type="checkbox"].variant-success').exists()).toBeTruthy()
        })

        it('sets the correct size class', () => {
            expect(wrapper.find('.mr-checkbox-container.size-lg').exists()).toBeTruthy()
        })

        it('sets the correct disabled class', async () => {
            await wrapper.setProps({ disabled: true })

            expect(wrapper.find('.mr-checkbox-container.disabled').exists()).toBeTruthy()
        })
    })
})
