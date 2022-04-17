<template>
	<Table
		v-model:columns="columns"
		:rows="rows"
		:loading="loading"
		filterable
		@update:filters="updateFilters"
	/>
</template>

<script>
import SimpleTable from '../../../tests/fixtures/Table/SimpleTable.json'

export default {
	data() {
		return {
			columns: SimpleTable.columns,
			rows: SimpleTable.rows,
			loading: false,
			filters: []
		}
	},

	methods: {
		updateFilters(filters) {
			this.filters = filters
			this.loading = true

			setTimeout(() => {
				// Simulate HTTP request here to retrieve
				// the filtered rows from server
				this.loading = false
			}, 1000)
		}
	}
}
</script>
