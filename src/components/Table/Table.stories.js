import Table from './index.vue'
import SimpleTable from '../../../tests/fixtures/Table/SimpleTable.json'
import TableWithPagination from '../../../tests/fixtures/Table/TableWithPagination.json'
import TableSortable from '../../../tests/fixtures/Table/TableSortable.json'

export default {
    title: 'Components/Table',
    component: Table,
}

const BasicTableTemplate = (args) => ({
    components: { Table },
    data: () => args,
    template: `
        <Table
            v-model:columns="columns"
            :rows="rows" />`,
})

export const BasicTable = BasicTableTemplate.bind({})
BasicTable.args = {
    rows: SimpleTable.rows,
    columns: SimpleTable.columns,
}

const LoadingTemplate = (args) => ({
    components: { Table },
    data: () => args,
    template: `
        <Table
            :columns="columns"
            :rows="rows"
            :loading="loading" />`,
})

export const LoadingTable = LoadingTemplate.bind({})
LoadingTable.args = {
    rows: SimpleTable.rows,
    columns: SimpleTable.columns,
    loading: true,
}

const TableWithRowSelectionTemplate = (args) => ({
    components: { Table },
    data: () => args,
    template: `
        <Table
            v-model:columns="columns"
            :rows="rows"
            :selectable-rows="selectableRows" />`,
})

export const WithRowSelection = TableWithRowSelectionTemplate.bind({})
WithRowSelection.args = {
    rows: SimpleTable.rows,
    columns: SimpleTable.columns,
    selectableRows: true,
}

const TableWithLocalPaginationTemplate = (args) => ({
    components: { Table },
    data: () => args,
    template: `
        <Table
            v-model:columns="columns"
            v-model:page="page"
            v-model:rows-per-page="rowsPerPage"
            :total-rows="totalRows"
            :rows="rows"
            local-pagination />`,
})

export const WithLocalPagination = TableWithLocalPaginationTemplate.bind({})
WithLocalPagination.args = {
    rows: TableWithPagination.rows,
    columns: TableWithPagination.columns,
    page: 1,
    rowsPerPage: 10,
    totalRows: 21,
}

const TableWithRemotePaginationTemplate = (args) => ({
    components: { Table },
    data() {
        return {
            ...args,
            loading: false,
            paginatedRows: [],
        }
    },
    template: `
        <Table
            v-model:columns="columns"
            v-model:page="page"
            v-model:rows-per-page="rowsPerPage"
            :rows="paginatedRows"
            :loading="loading"
            :total-rows="totalRows" />`,
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
            this.fetchRows(currentPage, args.rowsPerPage)
        },
    },
    mounted() {
        this.fetchRows(1, 10)
    },
})

export const WithRemotePagination = TableWithRemotePaginationTemplate.bind({})
WithRemotePagination.args = {
    rows: TableWithPagination.rows,
    columns: TableWithPagination.columns,
    page: 1,
    rowsPerPage: 10,
    totalRows: 21,
}

const TableWithLocalSortingTemplate = (args) => ({
    components: { Table },
    data: () => args,
    template: `
        <Table
            v-model:columns="columns"
            v-model:sort-by="sortBy"
            v-model:sort-direction="sortDirection"
            :rows="rows"
            local-sort />`,
})

export const WithLocalSorting = TableWithLocalSortingTemplate.bind({})
WithLocalSorting.args = {
    rows: TableSortable.rows,
    columns: TableSortable.columns,
    sortBy: 'name',
    sortDirection: 'asc',
    localSort: true,
}

const TableWithLocalSortingAndPaginationTemplate = (args) => ({
    components: { Table },
    data: () => args,
    template: `
        <Table
            v-model:columns="columns"
            v-model:sort-by="sortBy"
            v-model:sort-direction="sortDirection"
            v-model:page="page"
            v-model:rows-per-page="rowsPerPage"
            :rows="rows"
            :total-rows="totalRows"
            local-sort
            local-pagination/>`,
})

export const WithLocalSortingAndPagination = TableWithLocalSortingAndPaginationTemplate.bind({})
WithLocalSortingAndPagination.args = {
    rows: TableSortable.rows,
    columns: TableSortable.columns,
    sortBy: 'id',
    sortDirection: 'asc',
    localSort: true,
    page: 1,
    rowsPerPage: 10,
    totalRows: 21,
}
