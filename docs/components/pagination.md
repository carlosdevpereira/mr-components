# Pagination

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