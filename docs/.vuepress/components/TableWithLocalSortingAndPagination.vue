<template>
    <Table
        v-model:columns="columns"
        v-model:sort-by="sortBy"
        v-model:sort-direction="sortDirection"
        v-model:page="page"
        v-model:rows-per-page="rowsPerPage"
        :rows="rows"
        :total-rows="totalRows"
        local-sort
        local-pagination
    />
</template>

<script>
import TableSortable from '../../../tests/fixtures/Table/TableSortable.json'

export default {
    data() {
        return {
            rows: TableSortable.rows,
            columns: TableSortable.columns,
            sortBy: 'id',
            sortDirection: 'asc',
            localSort: true,
            page: 1,
            rowsPerPage: 10,
            totalRows: 21,
        }
    },
}
</script>
