import { reactive } from 'vue'

export const Dialog = {
	dialogs: reactive([]),

	new(options) {
		if (!options.title || options.title === '') throw new Error('Dialog title is required!')
		else if (!options.message || options.message === '')
			throw new Error('Dialog message is required!')
		else {
			let dialog = {
				id: Math.floor(Math.random() * Date.now()),
				type: options.type,
				icon: options.icon,
				title: options.title,
				message: options.message,
				cancelButtonLabel: options.cancelButtonLabel || 'Cancel',
				confirmButtonLabel: options.confirmButtonLabel || 'Ok',
				onCancel: options.onCancel,
				onConfirm: options.onConfirm,
			}

			this.dialogs.push(dialog)
		}
	},

	success(options) {
		this.new({ ...options, type: 'success' })
	},

	warning(options) {
		this.new({ ...options, type: 'warning' })
	},

	danger(options) {
		this.new({ ...options, type: 'danger' })
	},

	info(options) {
		this.new({ ...options, type: 'info' })
	},
}
