import Pagination from './index.vue'

export default {
    title: 'Components/Pagination',
    component: Pagination,
}

const BasicTemplate = (args) => ({
    components: { Pagination },
    data: () => args,
    template: `
    <section style="max-width: 960px;">
        <Pagination
            v-model:page="page"
            v-model:limit="limit"
            :total-count="totalCount" />
    </section>`,
})

export const BasicPagination = BasicTemplate.bind({})
BasicPagination.args = {
    page: 1,
    limit: 10,
    totalCount: 100,
}
