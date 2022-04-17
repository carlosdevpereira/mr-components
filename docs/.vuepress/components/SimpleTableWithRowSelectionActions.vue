<template>
	<Table
		v-model:columns="columns"
		:rows="rows"
		selectable-rows
	>
		<template #selection-actions="data">
			<Button
				variant="primary"
				@click="logSelectedRows(data.rows)"
			>
				Log
			</Button>

			<Button
				variant="primary"
				@click="logSelectedRows(data.rows)"
			>
				Log 2
			</Button>
		</template>
	</Table>
</template>

<script>
import SimpleTable from '../../../tests/fixtures/Table/SimpleTable.json'

export default {
	data() {
		return {
			columns: SimpleTable.columns,
			rows: SimpleTable.rows,
		}
	},

	methods: {
		logSelectedRows(rows) {
			console.log(rows)
		}
	}
}
</script>
