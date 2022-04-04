<template>
    <Table
        v-model:columns="columns"
        v-model:page="page"
        v-model:rows-per-page="rowsPerPage"
        :rows="paginatedRows"
        :loading="loading"
        :total-rows="totalRows"
    />
</template>

<script>
import TableWithPagination from '../../../tests/fixtures/Table/TableWithPagination.json'

export default {
    data() {
        return {
            rows: TableWithPagination.rows,
            columns: TableWithPagination.columns,
            page: 1,
            rowsPerPage: 10,
            totalRows: 21,
            loading: false,
            paginatedRows: [],
        }
    },

    methods: {
        fetchRows(page, limit) {
            // Simulate request to get rows
            this.loading = true

            setTimeout(() => {
                this.paginatedRows = this.rows.filter((r, i) => {
                    return (page - 1) * limit <= i && i < page * limit
                })

                this.loading = false
            }, 750)
        },
    },

    watch: {
        page(currentPage) {
            this.fetchRows(currentPage, this.rowsPerPage)
        },

        rowsPerPage(limit) {
            this.fetchRows(this.page, limit)
        },
    },

    mounted() {
        this.fetchRows(1, 10)
    },
}
</script>
