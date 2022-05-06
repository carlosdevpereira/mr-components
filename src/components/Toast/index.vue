<template>
	<Teleport
		v-if="toastNotifications.length"
		to="body"
	>
		<div class="mr-toast-container">
			<div
				v-for="(toast, index) in toastNotifications"
				:key="index"
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
		</div>
	</Teleport>
</template>

<script>
import './index.scss'
import { Toast } from '../../plugins/Toast'
import Icon from '../Icon/index.vue'
import Button from '../Button/index.vue'

export default {
	name: 'Toast',

	components: {
		Button,
		Icon,
	},

	computed: {
		toastNotifications() {
			return Toast.notifications
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
			const index = Toast.notifications.indexOf(toast)
			if (index === -1) return

			Toast.notifications.splice(index, 1)
		}
	}
}
</script>