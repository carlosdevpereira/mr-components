# Pagination

[[toc]]

## API

### Props

| Name        | Type     | Default | Description                                                     |
| ----------- | -------- | ------- | --------------------------------------------------------------- |
| page        | `Number` | `1`     | Defines the current page of the pagination                      |
| limit       | `Number` | `10`    | Defines the amount of items to show in each page                |
| total-count | `Number` | `0`     | Defines the total amount of items available to paginate through |

### Events

| Name         | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| update:page  | Event emitted whenever the current page changed                                       |
| update:limit | Event emitted whenever the limit (amount of lines per page) of the pagination changes |

## Simple pagination

A pagination, starting in the first page, showing 10 items per page and having a total of 21 items available:

<SimplePagination />

<CodeGroup>
  <CodeGroupItem title="Vue" active>

```vue
<template>
	<Pagination v-model:page="currentPage" :limit="limit" :total-count="totalRows" />
</template>

<script>
export default {
	data() {
		return {
			currentPage: 1,
			limit: 10,
			totalRows: 21,
		}
	},
}
</script>
```

  </CodeGroupItem>
</CodeGroup>
