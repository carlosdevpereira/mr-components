export const InfiniteScroll = {
	mounted(element, binding) {
		if (binding.value && typeof binding.value === 'function') {
			let reachedBottom = false

			element.addEventListener('scroll', event => {
				let el = event.srcElement

				let offset = 100
				if (binding.arg) {
					try {
						let parsedOffset = parseInt(binding.arg)
						if (Number.isNaN(parsedOffset) === false) {
							offset = parsedOffset
						}
					} catch (e) {
						console.error(e)
					}
				}

				if (el.scrollTop >= el.scrollHeight - el.clientHeight - offset) {
					if (!reachedBottom) {
						reachedBottom = true
						binding.value()
					}
				} else {
					reachedBottom = false
				}
			})
		}
	},

	unmounted(element) {
		if (element.scroll) {
			element.removeEventListener('scroll', element.scroll)
		}
	},
}
