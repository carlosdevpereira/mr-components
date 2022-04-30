<template>
	<!-- @TODO: Add in and out animations -->
	<!-- @TODO: Expiration timer -->
	<!-- @TODO: Unit tests -->

	<div
		class="mr-message"
		:class="classes"
	>
		<Icon
			v-if="iconName"
			:name="iconName"
		/>

		<div class="mr-message-title">
			{{ title }}

			<small
				v-if="body"
				class="mr-message-body"
			>
				{{ body }}
			</small>
		</div>

		<Button
			v-if="closeable"
			theme="text"
			:variant="variant || 'default'"
			icon="close-line"
			size="sm"
			class="mr-message-close-trigger"
			@click="destroyMessage"
		/>
	</div>
</template>

<script>
import './index.scss'
import 'remixicon/fonts/remixicon.css'
import Icon from '../Icon/index.vue'
import Button from '../Button/index.vue'

export const variants = ['danger', 'warning', 'success', 'info']

export default {
	name: 'Message',

	components: {
		Icon,
		Button
	},

	props: {
		variant: {
			type: String,
			default: '',
			validator: (v) => v === '' || variants.includes(v)
		},

		icon: {
			type: String,
			default: '',
		},

		title: {
			type: String,
			required: true
		},

		body: {
			type: String,
			default: ''
		},

		closeable: {
			type: Boolean,
			default: false
		},
	},

	emits: ['close'],

	computed: {
		iconName() {
			if (this.icon) return this.icon

			if (this.variant === 'success') return 'check-line'
			else if (this.variant === 'info') return 'information-line'
			else if (this.variant === 'warning') return 'error-warning-line'
			else if (this.variant === 'danger') return 'alarm-warning-line'

			return null
		},

		classes() {
			let classes = []

			if (this.variant) classes.push('variant-'+this.variant)

			return classes.join(' ')
		}
	},

	methods: {
		destroyMessage() {
			this.$emit('close')
		}
	}
}
</script>