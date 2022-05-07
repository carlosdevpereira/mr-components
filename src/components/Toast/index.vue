<template>
	<Teleport
		v-if="toastNotifications.length || animationInProgress"
		to="body"
	>
		<div
			class="mr-toast-container"
			:class="`mr-toast-${position}`"
		>
			<transition-group
				appear
				:css="false"
				mode="out-in"
				@enter="animateRender"
				@leave="animateLeave"
			>
				<div
					v-for="toast in toastNotifications"
					:id="`mr-toast-${toast.id}`"
					:key="toast.id"
					class="mr-toast"
					:class="variant(toast)"
				>
					<Icon
						class="mr-toast-icon"
						:name="icon(toast)"
					/>

					<div class="mr-toast-body">
						<strong>
							{{ toast.title || toast.type }}
						</strong>

						<small :title="toast.message">{{ toast.message }}</small>
					</div>

					<Button
						v-if="toast.closeable"
						theme="text"
						variant="default"
						icon="close-line"
						size="sm"
						class="mr-toast-close"
						@click="destroy(toast)"
					/>
				</div>
			</transition-group>
		</div>
	</Teleport>
</template>

<script>
import './index.scss'
import gsap from 'gsap'
import Icon from '../Icon/index.vue'
import Button from '../Button/index.vue'
import { Toast } from '../../plugins/Toast'

export const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right']

export default {
	name: 'Toast',

	components: {
		Button,
		Icon,
	},

	props: {
		position: {
			type: String,
			default: 'top-right',
			validator: v => positions.includes(v),
		}
	},

	data() {
		return {
			animationInProgress: false
		}
	},

	computed: {
		toastNotifications() {
			return Toast.notifications
		},

		transitionDetails() {
			let translateProperty
			let translateValue
			if (this.position === 'top-left') {
				translateProperty = 'translateX'
				translateValue = -200
			} else if (this.position === 'top-right') {
				translateProperty = 'translateX'
				translateValue = 200
			} else if (this.position === 'top-center') {
				translateProperty = 'translateY'
				translateValue = -200
			} else if (this.position === 'bottom-left') {
				translateProperty = 'translateX'
				translateValue = -200
			} else if (this.position === 'bottom-center') {
				translateProperty = 'translateY'
				translateValue = 200
			} else if (this.position === 'bottom-right') {
				translateProperty = 'translateX'
				translateValue = 200
			}

			return {[translateProperty]: translateValue}
		}
	},

	methods: {
		variant(toast) {
			if (toast.type === 'error') {
				return 'variant-danger'
			}

			return 'variant-' + toast.type
		},

		icon(toast) {
			if (toast.type === 'success') {
				return 'check-line'
			} else if (toast.type === 'warning') {
				return 'error-warning-line'
			} else if (toast.type === 'error') {
				return 'alarm-warning-line'
			}

			return 'information-line'
		},

		destroy(toast) {
			this.animationInProgress = true

			const index = Toast.notifications.indexOf(toast)
			if (index === -1) return

			Toast.notifications.splice(index, 1)
		},

		animateRender(el, done) {
			gsap.from(el, {
				opacity: 0,
				duration: .25,
				...this.transitionDetails,
				onComplete: () => {
					done()

					this.animationInProgress = false
				},
			})
		},

		animateLeave(el, done) {
			gsap.to(el, {
				opacity: 0,
				height: 0,
				padding: 0,
				margin: 0,
				duration: 1,
				...this.transitionDetails,
				onComplete: () => {
					done()

					this.animationInProgress = false
				},
			})
		}
	}
}
</script>