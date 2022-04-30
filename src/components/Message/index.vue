<template>
	<Transition
		appear
		:css="false"
		mode="out-in"
		@enter="animateMessageRender"
		@leave="animateMessageLeave"
	>
		<div
			v-if="isVisible"
			class="mr-message"
			:class="classes"
		>
			<!-- @TODO: Expiration timer -->

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
				@click="destroy"
			/>
		</div>
	</Transition>
</template>

<script>
import './index.scss'
import 'remixicon/fonts/remixicon.css'
import Icon from '../Icon/index.vue'
import Button from '../Button/index.vue'
import anime from 'animejs'

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

		closeable: {
			type: Boolean,
			default: false
		},
	},

	emits: ['update:is-visible'],

	data() {
		return {
			isVisible: false,
			title: '',
			body: ''
		}
	},

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
		show(title, body = '') {
			if (!title) {
				throw new Error('Title is required to display a message!')
			} else {
				this.isVisible = true
				this.title = title
				this.body = body
			}

			this.$emit('update:is-visible', true)
		},

		destroy() {
			this.isVisible = false
			this.$emit('update:is-visible', false)
		},

		animateMessageRender(el, done) {
			anime({
				targets: el,
				opacity: [0, 1],
				translateY: [-50, 0],
				easing: 'easeInOutQuad',
				duration: 800,
				changeComplete: () => done()
			})
		},

		animateMessageLeave(el, done) {
			anime({
				targets: el,
				opacity: [1, 0],
				translateY: {
					value: '-=50',
					duration: 400
				},
				height: 0,
				padding: 0,
				easing: 'easeInOutQuad',
				changeComplete: () => done()
			})
		}
	}
}
</script>