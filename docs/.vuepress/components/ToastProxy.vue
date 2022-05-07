<template>
	<Button
		theme="text-solid"
		@click="sendToast"
	>
		Send notification
	</Button>
</template>

<script>
import { Toast } from '@/plugins/Toast'

export default {
	props: {
		type: {
			type: String,
			default: 'info'
		},

		title: {
			type: String,
			default: null
		},

		closeable: {
			type: Boolean,
			default: null
		},

		timer: {
			type: [String,Number],
			default: null
		}
	},

	created() {
		// Local $toast registration if project
		// didn't install all components at once
		this.$toast = Toast
	},

	methods: {
		sendToast() {
			this.$toast.notify({
				type: this.type,
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit in diam nonumy bibendum',
				title: this.title,
				closeable: this.closeable,
				timer: this.timer
			})
		}
	}
}
</script>