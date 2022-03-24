# Table

The table component is an extension to the default HTML table, featuring: column visibility controls, pagination, sorting, loading state, etc

[[toc]]

## Column Definition

@TODO

## Basic Table

<Simple-Table />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
    <Table v-model:columns="columns" :rows="rows" />
</template>

<script>
export default {
    data() {
        return {
            columns: [...],
            rows: [...],
        }
    },
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Loading

<Simple-Table-Loading />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
    <Table v-model:columns="columns" :rows="rows" loading />
</template>

<script>
export default {
    data() {
        return {
            columns: [...],
            rows: [...],
        }
    },
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Row Selection

<Simple-Table-With-Row-Selection />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
    <Table v-model:columns="columns" :rows="rows" selectable-rows />
</template>

<script>
export default {
    data() {
        return {
            columns: [...],
            rows: [...],
        }
    },
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Pagination

### Local pagination

<Table-With-Local-Pagination />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
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
export default {
    data() {
        return {
            columns: [...],
            rows: [...],
            page: 1,
            rowsPerPage: 10,
            totalRows: 21,
        }
    },
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### Remote pagination

<Table-With-Remote-Pagination />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
    <Table
        v-model:columns="columns"
        v-model:page="page"
        v-model:rows-per-page="rowsPerPage"
        :rows="rows"
        :loading="loading"
        :total-rows="totalRows"
    />
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            columns: [...],
            rows: [...],
            page: 1,
            rowsPerPage: 10,
            totalRows: 21,
        }
    },

    methods: {
        fetchRows(page, limit) {
            this.loading = true
            // Simulate request to get rows
            // Assign those rows to this.rows
            this.loading = false
        },
    },

    watch: {
        page(currentPage) {
            this.fetchRows(currentPage, this.rowsPerPage)
        },
    },

    mounted() {
        this.fetchRows(1, 10)
    },
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

## Sorting

### Local Sorting

<Table-With-Local-Sorting />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
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
export default {
    data() {
        return {
            columns: [...],
            rows: [...],
            sortBy: 'name',
            sortDirection: 'asc',
            localSort: true,
        }
    },
}
</script>
```

  </CodeGroupItem>
</CodeGroup>

### Local Sorting and Pagination

<Table-With-Local-Sorting-And-Pagination />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
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
export default {
    data() {
        return {
            columns: [...],
            rows: [...],
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
```

  </CodeGroupItem>
</CodeGroup>
