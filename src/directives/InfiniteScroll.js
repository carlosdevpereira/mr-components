export const InfiniteScroll = {
	mounted(element, binding) {
		if (binding.value && typeof binding.value === 'function') {
			let reachedBottom = false

			element.onScroll = event => {
				let el = event.srcElement

				let offset = 100
				if (binding.arg) {
					let parsedOffset = parseInt(binding.arg)
					if (Number.isNaN(parsedOffset) === false) {
						offset = parsedOffset
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
			}

			element.addEventListener('scroll', element.onScroll)
		}
	},

	unmounted(element) {
		if (element.onScroll) {
			element.removeEventListener('scroll', element.onScroll)
		}
	},
}
