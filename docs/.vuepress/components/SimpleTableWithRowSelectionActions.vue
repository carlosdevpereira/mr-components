<template>
    <Table 
        v-model:columns="columns" 
        :rows="rows" 
        selectable-rows>
        <template #selection-actions="{ rows }">
			<Button 
                variant="primary"
                @click="logSelectedRows(rows)">
                Log
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
