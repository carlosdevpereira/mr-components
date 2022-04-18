<template>
	<Autocomplete
		:fetch="fetchHandler"
		v-bind="$attrs"
		@update:value="v => value = v"
	/>
</template>

<script>
export default {
	data() {
		return {
			value: null,
		}
	},

	methods: {
		async fetchHandler(value) {
			// Simulate HTTP request to retrieve
			// the autocomplete details
			console.log('searching for: ', value)
			if (!value) return []

			return new Promise(resolve => {
				setTimeout(() => {
					console.log('timeout value: ', value)
					resolve([
						{ key: 1, name: 'Result 1' },
						{ key: 2, name: 'Result 2' },
						{ key: 3, name: 'Result 3' }
					])
				}, 1500)
			})
		}
	}
}
</script>