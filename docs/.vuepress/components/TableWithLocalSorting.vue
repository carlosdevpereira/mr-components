<template>
    <Table
        v-model:columns="columns"
        v-model:sort-by="sortBy"
        v-model:sort-direction="sortDirection"
        :rows="rows"
        local-sort
    />
</template>

<script>
import TableSortable from '../../../tests/fixtures/Table/TableSortable.json'

export default {
    data() {
        return {
            rows: TableSortable.rows,
            columns: TableSortable.columns,
            sortBy: 'name',
            sortDirection: 'asc',
            localSort: true,
        }
    },
}
</script>
