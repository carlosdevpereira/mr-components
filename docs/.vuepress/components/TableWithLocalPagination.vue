<template>
	<Table
		v-model:columns="columns"
		v-model:page="page"
		v-model:rows-per-page="rowsPerPage"
		:total-rows="totalRows"
		:rows="rows"
		local-pagination
	/>
</template>

<script>
import TableWithPagination from '@tests/fixtures/Table/TableWithPagination.json'

export default {
	data() {
		return {
			rows: TableWithPagination.rows,
			columns: TableWithPagination.columns,
			page: 1,
			rowsPerPage: 10,
			totalRows: 21,
		}
	},
}
</script>
