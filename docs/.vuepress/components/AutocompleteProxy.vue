<template>
	<Autocomplete
		v-model="value"
		:get-items="getItems"
		v-bind="$attrs"
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
		getItems(value, options) {
			if (!value) return []

			/*
				Simulate HTTP request to retrieves the autocomplete suggestions.
			   	The options argument contains the page
				and amount of results to return
			*/
			return new Promise(resolve => {
				let response = [
					{ key: 1, name: 'Result 1' },
					{ key: 2, name: 'Result 2' },
					{ key: 3, name: 'Result 3' },
					{ key: 4, name: 'Result 4' },
					{ key: 5, name: 'Result 5' },
					{ key: 6, name: 'Result 6' },
					{ key: 7, name: 'Result 7' },
					{ key: 8, name: 'Result 8' },
					{ key: 9, name: 'Result 9' },
					{ key: 10, name: 'Result 10' },
					{ key: 11, name: 'Result 11' },
					{ key: 12, name: 'Result 12' },
					{ key: 13, name: 'Result 13' },
					{ key: 14, name: 'Result 14' },
					{ key: 15, name: 'Result 15' },
					{ key: 16, name: 'Result 16' },
					{ key: 17, name: 'Result 17' },
					{ key: 18, name: 'Result 18' },
					{ key: 19, name: 'Result 19' },
					{ key: 20, name: 'Result 20' },
					{ key: 21, name: 'Result 21' },
				]

				resolve(response)
			})
		},
	}
}
</script>