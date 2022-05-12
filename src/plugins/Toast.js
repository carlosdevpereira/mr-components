import { reactive } from 'vue'
import gsap from 'gsap'

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
				/* istanbul ignore next */
				setTimeout(() => {
					const notificationIndex = this.notifications.indexOf(notification)
					if (notificationIndex > -1) {
						const el = document.getElementById('mr-toast-' + notification.id)

						const transitionDetails = classes => {
							let translateProperty
							let translateValue
							if (classes.contains('mr-toast-top-left')) {
								translateProperty = 'translateX'
								translateValue = -200
							} else if (classes.contains('mr-toast-top-right')) {
								translateProperty = 'translateX'
								translateValue = 200
							} else if (classes.contains('mr-toast-top-center')) {
								translateProperty = 'translateY'
								translateValue = -200
							} else if (classes.contains('mr-toast-bottom-left')) {
								translateProperty = 'translateX'
								translateValue = -200
							} else if (classes.contains('mr-toast-bottom-center')) {
								translateProperty = 'translateY'
								translateValue = 200
							} else if (classes.contains('mr-toast-bottom-right')) {
								translateProperty = 'translateX'
								translateValue = 200
							}

							return { [translateProperty]: translateValue }
						}

						gsap.to(el, {
							opacity: 0,
							height: 0,
							padding: 0,
							margin: 0,
							duration: 1,
							...transitionDetails(el.parentElement.classList),
							onComplete: () => {
								this.notifications.splice(
									this.notifications.indexOf(notification),
									1
								)
							},
						})
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
		this.notify({ ...options, type: 'error' })
	},

	info(options) {
		this.notify({ ...options, type: 'info' })
	},
}
