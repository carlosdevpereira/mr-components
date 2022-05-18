<template>
	<button
		type="button"
		class="mr-button"
		:class="classes"
		:disabled="disabled || loading"
	>
		<Spinner v-if="loading" />

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
import Icon from '../Icon/index.vue'
import Spinner from '../Spinner/index.vue'

export const themes = ['solid', 'outlined', 'text', 'text-solid']
export const variants = ['default', 'primary', 'secondary', 'danger', 'warning', 'success', 'info']
export const sizes = ['sm', 'md', 'lg']
export const iconPositions = ['start', 'end']

export default {
	name: 'Button',

	components: { Icon, Spinner },

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

		loading: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		classes() {
			let classes = []

			classes.push(`${this.theme}-theme`)
			classes.push(`variant-${this.variant}`)
			classes.push(`size-${this.size}`)
			if (this.loading) classes.push('is-loading')

			return classes.join(' ')
		},

		hasOnlyIcon() {
			return !this.$slots['default'] && !this.label
		}
	}
}
</script>
