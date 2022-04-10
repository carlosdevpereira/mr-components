<template>
	<label
		class="mr-radio-container"
		:class="labelClasses"
	>
		<input
			v-model="currentValue"
			type="radio"
			class="mr-radio"
			:value="value"
			:disabled="disabled"
		>

		<span>
			{{ label }}
		</span>
	</label>
</template>

<script>
import './index.scss'
export const variants = ['default', 'primary', 'secondary', 'danger', 'warning', 'success', 'info']
export const sizes = ['sm', 'md', 'lg']

export default {
	name: 'RadioButton',

	props: {
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
			required: true
		},

		modelValue: {
			type: [String,Boolean],
			default: null,
		},

		value: {
			type: [String, Number, Boolean, Date, Object],
			default: null
		}
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

		labelClasses() {
			return `variant-${this.variant} size-${this.size} ${this.disabled ? 'disabled' : ''}`
		},
	},
}
</script>
