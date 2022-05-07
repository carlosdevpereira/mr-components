import { reactive } from 'vue'

export const Toast = {
	notifications: reactive([]),

	notify(options) {
		let notification = {
			id: Math.floor(Math.random() * Date.now()),
			type: options.type,
			title: options.title,
			message: options.message,
			closeable:
				options.closeable === undefined || options.closeable === null || options.closeable,
			timer: options.timer,
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
