<template>
	<Autocomplete
		ref="autocomplete"
		class="autocomplete-disabled"
		:fetch="fetchHandler"
	/>
</template>

<script>
export default {
	created() {
		setTimeout(() => {
			this.$refs.autocomplete.loading = true
		}, 50)
	},

	methods: {
		fetchHandler(value) {
			// Simulate HTTP request to retrieve
			// the autocomplete details
			console.log('searching for: ', value)
		}
	}
}
</script>

<style>
.autocomplete-disabled {
	pointer-events: none;
}
</style>