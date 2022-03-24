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
