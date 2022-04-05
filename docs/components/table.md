# Table

The table component is an extension to the default HTML table, featuring: column visibility controls, pagination, sorting, loading state, etc

[[toc]]

## API

### Props

| Name                | Type      | Default | Description                                                                                                                                                 |
| ------------------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| loading             | `Boolean` | `false` | Defines if the table should be in loading state or not, showing a spinner when this prop is set to true.                                                    |
| selectable-rows     | `Boolean` | `false` | Defines if the table can allow rows to be selected or not, showing checkboxes on each row when this prop is set to true.                                    |
| [columns](#columns) | `Array`   | `[]`    | Array containing the columns that the table component should render.                                                                                        |
| rows                | `Array`   | `[]`    | Array containing the rows that the table component should render.                                                                                           |
| local-pagination    | `Boolean` | `false` | Defines if the table should paginate the rows internally or not. <br> Pages will be calculated based on the `page`, `rows-per-page` and `total-rows` props. |
| page                | `Number`  | `0`     | Defines the current page for the table pagination.                                                                                                          |
| rows-per-page       | `Number`  | `10`    | Defines the maximum number of rows to show by page.                                                                                                         |
| total-rows          | `Number`  | `0`     | Defines the total number of rows available to paginate through.                                                                                             |
| local-sort          | `Boolean` | `false` | Defines if the table should sort the rows internally or not. <br> The sorting will be based on the `sort-by` and `sort-direction` props.                    |
| sort-by             | `String`  | `''`    | Defines the field that is actively being used to sort the table.                                                                                            |
| sort-direction      | `String`  | `'asc'` | Defines the direction of the sorting applied to the table when sorting by a specific field.                                                                 |

#### Columns

| Property | Type      | Description                                                                  |
| -------- | --------- | ---------------------------------------------------------------------------- |
| key      | `String`  | Key identifier of the column, used to search for the value in the row object |
| name     | `String`  | Name of the column to show in the table header                               |
| hidden   | `Boolean` | Defines if the column should be hidden or not                                |
| sortable | `Boolean` | Defines if the column allows sorting                                         |

### Events

| Name                  | Description                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| selected-rows-changed | Event emitted whenever a row is selected/un-selected, containing the array of currently selected rows. |
| update:columns        | Event emitted whenever the table wants to update the `columns` prop value.                             |
| update:page           | Event emitted whenever the table wants to update the `page` prop value.                                |
| update:rows-per-page  | Event emitted whenever the table wants to update the `rows-per-page` prop value.                       |
| update:sort-by        | Event emitted whenever the table wants to update the `sort-by` prop value.                             |
| update:sort-direction | Event emitted whenever the table wants to update the `sort-direction` prop value.                      |

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

## Row Selection with actions

<Simple-Table-With-Row-Selection-Actions />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Table v-model:columns="columns" :rows="rows" selectable-rows>
		<template #selection-actions="{ rows }">
			<Button @click="logSelectedRows(rows)"> Log </Button>
		</template>
	</Table>
</template>

<script>
export default {
    data() {
        return {
            columns: [...],
            rows: [...],
        }
    },

    methods: {
        logSelectedRows(rows) {
            console.log(rows)
        }
    }
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
