<template>
    <label class="mr-checkbox-container" :class="labelClasses">
        <input
            type="checkbox"
            class="mr-checkbox"
            :class="classes"
            :disabled="disabled"
            v-model="currentValue"
        />

        {{ label }}
    </label>
</template>

<script>
export const themes = ['solid', 'outlined', 'switch']
export const variants = ['default', 'primary', 'secondary', 'danger', 'warning', 'success', 'info']
export const sizes = ['sm', 'md', 'lg']

export default {
    props: {
        theme: {
            type: String,
            default: themes[0],
            validator: (v) => themes.includes(v),
        },

        variant: {
            type: String,
            default: variants[0],
            validator: (v) => variants.includes(v),
        },

        size: {
            type: String,
            default: 'md',
            validator: (v) => sizes.includes(v),
        },

        disabled: {
            type: Boolean,
            default: false,
        },

        label: {
            type: String,
            default: '',
        },

        modelValue: {
            type: Boolean,
            default: false,
        },
    },

    emit: ['update:modelValue'],

    computed: {
        currentValue: {
            get() {
                return this.modelValue
            },

            set(value) {
                return this.$emit('update:modelValue', value)
            },
        },

        classes() {
            return `${this.theme}-theme variant-${this.variant}`
        },

        labelClasses() {
            return `size-${this.size} ${this.disabled ? 'disabled' : ''}`
        },
    },
}
</script>

<style lang="scss" src="./index.scss" />
