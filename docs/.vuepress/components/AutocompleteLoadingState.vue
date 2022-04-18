<template>
	<Autocomplete
		ref="autocomplete"
		class="autocomplete-disabled"
		:fetch="fetchHandler"
	/>
</template>

<script>
export default {
	mounted() {
		const interval = setInterval(() => {
			if (this.$refs.autocomplete) {
				this.$refs['autocomplete'].loading = true
				clearInterval(interval)
			}
		}, 50)
	},

	methods: {
		fetchHandler(value) {
			// Simulate HTTP request to retrieve
			// the autocomplete details
			console.log('searching for: ', value)
		}
	},
}
</script>

<style>
.autocomplete-disabled {
	pointer-events: none;
}
</style>