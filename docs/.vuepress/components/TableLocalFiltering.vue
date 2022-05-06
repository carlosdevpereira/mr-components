<template>
	<Table
		v-model:columns="columns"
		:rows="rows"
		filterable
		local-filtering
	/>
</template>

<script>
import TableWithPagination from '@tests/fixtures/Table/TableWithPagination.json'

export default {
	data() {
		return {
			columns: TableWithPagination.columns,
			rows: TableWithPagination.rows
		}
	}
}
</script>
