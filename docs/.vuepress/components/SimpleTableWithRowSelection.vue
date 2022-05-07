<template>
	<Table
		v-model:columns="columns"
		:rows="rows"
		selectable-rows
	/>
</template>

<script>
import SimpleTable from '@tests/fixtures/Table/SimpleTable.json'

export default {
	data() {
		return {
			columns: SimpleTable.columns,
			rows: SimpleTable.rows,
		}
	},
}
</script>
