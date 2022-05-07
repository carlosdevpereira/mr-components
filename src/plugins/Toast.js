import { reactive } from 'vue'

export const Toast = {
	notifications: reactive([]),

	notify(options) {
		if (!options.message || options.message === '')
			throw new Error('Toast message is required!')
		else {
			let closeable = false
			if (options.closeable === undefined || options.closeable === null || options.closeable)
				closeable = true

			let notification = {
				id: Math.floor(Math.random() * Date.now()),
				type: options.type,
				title: options.title,
				message: options.message,
				timer: options.timer,
				closeable,
			}

			this.notifications.push(notification)

			if (notification.timer) {
				setTimeout(() => {
					const notificationIndex = this.notifications.indexOf(notification)
					if (notificationIndex > -1) {
						this.notifications.splice(this.notifications.indexOf(notification), 1)
					}
				}, notification.timer)
			}
		}
	},

	success(options) {
		this.notify({ ...options, type: 'success' })
	},

	warn(options) {
		this.notify({ ...options, type: 'warning' })
	},

	alert(options) {
		this.notify({ ...options, type: 'danger' })
	},

	info(options) {
		this.notify({ ...options, type: 'info' })
	},
}
