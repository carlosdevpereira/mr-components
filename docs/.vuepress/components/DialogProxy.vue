<template>
	<Button
		theme="text-solid"
		@click="triggerDialog"
	>
		Trigger dialog
	</Button>
</template>

<script>
import { Dialog } from '@/plugins/Dialog'

export default {
	props: {
		type: {
			type: String,
			default: 'danger'
		},

		title: {
			type: String,
			default: 'Dialog title'
		},

		message: {
			type: String,
			default: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
		},

		cancelButtonLabel: {
			type: String,
			default: null
		},

		confirmButtonLabel: {
			type: String,
			default: null
		},

		withCallbacks: {
			type: Boolean,
			default: false
		}
	},

	created() {
		// Local $dialog registration if project
		// didn't install all components at once
		this.$dialog = Dialog
	},

	methods: {

		triggerDialog() {
			let callbacks = {}
			if (this.withCallbacks) {
				callbacks.onCancel = () => { alert('Canceled') }
				callbacks.onConfirm = () => { alert('Starting the update') }
			}

			this.$dialog.new({
				type: this.type,
				title: this.title,
				message: this.message,
				cancelButtonLabel: this.cancelButtonLabel,
				confirmButtonLabel: this.confirmButtonLabel,
				...callbacks
			})
		}
	}
}
</script>