
<template>
	<label
		class="mr-input-container"
		:class="classes"
		:disabled="isDisabled"
	>
		<Icon
			v-if="icon"
			:name="icon"
		/>

		<span
			v-if="label"
			v-text="label"
		/>

		<input
			v-model="currentValue"
			type="text"
			:placeholder="placeholder"
			:disabled="isDisabled"
		>
	</label>
</template>

<script>
import './index.scss'
import 'remixicon/fonts/remixicon.css'
import Icon from '../Icon/index.vue'

export const themes = ['default', 'solid', 'outlined']
export const variants = ['default', 'primary', 'secondary', 'danger', 'warning', 'success', 'info']
export const sizes = ['sm', 'md', 'lg']

export default {
	name: 'Input',

	components: {
		Icon
	},

	props: {
		theme: {
			type: String,
			default: themes[0],
			validator: v => !v || themes.includes(v),
		},

		variant: {
			type: String,
			default: variants[0],
			validator: v => variants.includes(v),
		},

		size: {
			type: String,
			default: "md",
			validator: v => sizes.includes(v),
		},

		disabled: {
			type: Boolean,
			default: false,
		},

		label: {
			type: String,
			default: ''
		},

		labelPosition: {
			type: String,
			default: 'start',
			validator: (v) => ['start', 'center', 'end'].includes(v)
		},

		inline: {
			type: Boolean,
			default: false,
		},

		icon: {
			type: String,
			default: '',
		},

		iconPosition: {
			type: String,
			default: 'start',
			validator: (v) => ['start', 'end'].includes(v)
		},

		placeholder: {
			type: String,
			default: ''
		},

		modelValue: {
			type: [Object, Number, String],
			default: null
		},
	},

	emits: ["update:model-value"],

	computed: {
		currentValue: {
			get() {
				return this.modelValue;
			},

			set(value) {
				this.$emit("update:model-value", value);
			}
		},

		isDisabled() {
			return this.disabled
		},

		classes() {
			let classes = []

			if (this.theme) classes.push(`${this.theme}-theme`)
			if (this.variant) classes.push(` variant-${this.variant}`)
			if (this.size) classes.push(` size-${this.size}`)
			if (this.inline) classes.push(` inline`)
			if (this.labelPosition) classes.push(` label-position-${this.labelPosition}`)
			if (this.icon) classes.push(' has-icon icon-position-' + this.iconPosition)

			return classes.join('')
		},
	}
}
</script>