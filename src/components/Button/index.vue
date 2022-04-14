<template>
	<button
		class="mr-button"
		:class="classes"
		:disabled="disabled"
	>
		<Icon
			v-if="iconPosition === 'start' && icon !== ''"
			:name="icon"
			class="icon-position-start"
			:class="{ 'only-icon': hasOnlyIcon }"
		/>

		<slot>
			{{ label }}
		</slot>

		<Icon
			v-if="iconPosition === 'end' && icon !== ''"
			:name="icon"
			class="icon-position-end"
			:class="{ 'only-icon': hasOnlyIcon }"
		/>
	</button>
</template>

<script>
import './index.scss'
import 'remixicon/fonts/remixicon.css'
import Icon from '../Icon/index.vue'

export const themes = ['solid', 'outlined', 'text', 'text-solid']
export const variants = ['default', 'primary', 'secondary', 'danger', 'warning', 'success', 'info']
export const sizes = ['sm', 'md', 'lg']
export const iconPositions = ['start', 'end']

export default {
	name: 'Button',

	components: { Icon },

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

		label: {
			type: String,
			default: '',
		},

		icon: {
			type: String,
			default: '',
		},

		iconPosition: {
			type: String,
			default: iconPositions[0],
			validator: v => iconPositions.includes(v),
		},

		disabled: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		classes() {
			return `${this.theme}-theme variant-${this.variant} size-${this.size}`
		},

		hasOnlyIcon() {
			return !this.$slots['default'] && !this.label
		}
	}
}
</script>
