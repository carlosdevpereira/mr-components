<template>
	<label
		class="mr-checkbox-container"
		:class="labelClasses"
	>
		<input
			v-model="currentValue"
			type="checkbox"
			class="mr-checkbox"
			:class="classes"
			:disabled="disabled"
		>

		{{ label }}
	</label>
</template>

<script>
import './index.scss'

export const themes = ['solid', 'outlined', 'switch']
export const variants = ['default', 'primary', 'secondary', 'danger', 'warning', 'success', 'info']
export const sizes = ['sm', 'md', 'lg']

export default {
	name: 'Checkbox',

	props: {
		theme: {
			type: String,
			default: themes[0],
			validator: v => themes.includes(v),
		},

		variant: {
			type: String,
			default: variants[0],
			validator: v => variants.includes(v),
		},

		size: {
			type: String,
			default: 'md',
			validator: v => sizes.includes(v),
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

	emits: ['update:model-value'],

	computed: {
		currentValue: {
			get() {
				return this.modelValue
			},

			set(value) {
				return this.$emit('update:model-value', value)
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
