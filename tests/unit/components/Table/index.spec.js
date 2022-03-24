import Table from '@/components/Table'
import Checkbox from '@/components/Checkbox'
import Spinner from '@/components/Spinner'
import Pagination from '@/components/Pagination'
import SimpleTableFixture from '../../../fixtures/Table/SimpleTable.json'
import SimpleTableWithHiddenColumnsFixtures from '../../../fixtures/Table/SimpleTableWithHiddenColumns.json'
import SimpleTableWithSortableColumnsFixtures from '../../../fixtures/Table/SimpleTableWithSortableColumnsFixtures.json'
import { flushPromises, shallowMount } from '@vue/test-utils'
import { first } from 'lodash'

describe('Table', () => {
    describe('Simple table', () => {
        let wrapper

        beforeEach(() => {
            wrapper = shallowMount(Table, {
                props: {
                    columns: SimpleTableFixture.columns,
                    rows: SimpleTableFixture.rows,
                },
            })
        })

        it('renders table header row', () => {
            const tableHeaderRowsCount = wrapper.findAll('table thead tr').length
            expect(tableHeaderRowsCount).toBe(1)
        })

        it('renders the expected number of columns', () => {
            const columnCount = wrapper.findAll('table thead tr th').length
            expect(columnCount).toBe(SimpleTableFixture.columns.length)
        })

        it('renders the expected columns', () => {
            const firstColumnName = wrapper.findAll('table thead tr th')[0].text()
            expect(firstColumnName).toBe(SimpleTableFixture.columns[0].name)

            const secondColumnName = wrapper.findAll('table thead tr th')[1].text()
            expect(secondColumnName).toBe(SimpleTableFixture.columns[1].name)
        })

        it('renders total results', () => {
            const totalResults = wrapper.find('.total-results').text()
            expect(totalResults).toBe('2 Results')
        })

        it("doesn't show the select all rows header checkbox", () => {
            const hasSelectAllRowsHeaderCell = wrapper.find('th .row-selection-cell').exists()
            expect(hasSelectAllRowsHeaderCell).toBeFalsy()
        })

        it("doesn't show the row selection checkbox in each row", () => {
            const hasAnyRowSelectionCheckbox = wrapper.findAll('.select-current-row').length
            expect(hasAnyRowSelectionCheckbox).toBe(0)
        })

        it("doesn't show the pagination component", () => {
            const hasPaginationSection = wrapper.findComponent(Pagination).exists()
            expect(hasPaginationSection).toBeFalsy()
        })
    })

    describe('Loading state', () => {
        let wrapper

        beforeEach(() => {
            wrapper = shallowMount(Table, {
                props: {
                    columns: SimpleTableFixture.columns,
                    rows: SimpleTableFixture.rows,
                    loading: true,
                },
            })
        })

        it('renders the spinner component', () => {
            expect(wrapper.findComponent(Spinner).exists()).toBeTruthy()
        })

        it('renders the table-footer section when loading is set to false', async () => {
            await wrapper.setProps({ loading: false })

            expect(wrapper.find('footer').exists()).toBeTruthy()
        })

        it('hides the spinner component when loading is set to false', async () => {
            await wrapper.setProps({ loading: false })

            expect(wrapper.findComponent(Spinner).exists()).toBeFalsy()
        })

        it('hides the table-footer section when loading is set to true', () => {
            expect(wrapper.find('.table-footer').exists()).toBeFalsy()
        })
    })

    describe('Column visibility', () => {
        let wrapper

        beforeEach(() => {
            wrapper = shallowMount(Table, {
                props: {
                    columns: SimpleTableFixture.columns,
                    rows: SimpleTableFixture.rows,
                },
            })
        })

        it('renders the column visibility toggle button', () => {
            const columnVisibilityToggleButton = wrapper.find('.column-visibility-panel-toggle')
            expect(columnVisibilityToggleButton.exists()).toBeTruthy()
        })

        it('renders the column visibility panel when toggle button is clicked', async () => {
            const columnVisibilityToggleButton = wrapper.find('.column-visibility-panel-toggle')

            await columnVisibilityToggleButton.trigger('click')

            const columnVisibilityPanel = wrapper.find('.columns-visibility-panel')
            expect(columnVisibilityPanel.exists()).toBeTruthy()
        })

        it('toggles column visibility when column checkbox is clicked', async () => {
            const columnVisibilityToggleButton = wrapper.find('.column-visibility-panel-toggle')
            await columnVisibilityToggleButton.trigger('click')

            const firstColumnCheckbox = wrapper.findAllComponents(Checkbox)[0]
            await firstColumnCheckbox.vm.$emit('update:modelValue')

            expect(wrapper.findAll('table thead tr th').length).toBe(1)
        })

        describe('when creating a table with hidden columns by default', () => {
            let wrapper

            beforeEach(() => {
                wrapper = shallowMount(Table, {
                    props: {
                        columns: SimpleTableWithHiddenColumnsFixtures.columns,
                        rows: SimpleTableWithHiddenColumnsFixtures.rows,
                    },
                })
            })

            it('renders table header row', () => {
                const tableHeaderRowsCount = wrapper.findAll('table thead tr').length
                expect(tableHeaderRowsCount).toBe(1)
            })

            it('renders the expected number of columns', () => {
                const columnCount = wrapper.findAll('table thead tr th').length
                const expectedVisibleColumns = SimpleTableWithHiddenColumnsFixtures.columns.filter(
                    (c) => !c.hidden
                ).length
                expect(columnCount).toBe(expectedVisibleColumns)
            })

            it('propagates update:columns event when columns array mutates', () => {
                wrapper.vm.visibleColumns = wrapper.vm.visibleColumns

                expect(wrapper.emitted('update:columns')).toBeTruthy()
            })
        })
    })

    describe('Pagination', () => {
        let wrapper

        beforeEach(() => {
            wrapper = shallowMount(Table, {
                props: {
                    columns: SimpleTableFixture.columns,
                    rows: SimpleTableFixture.rows,
                    localPagination: true,
                    page: 1,
                    rowsPerPage: 1,
                    totalRows: 2,
                },
            })
        })

        it('renders pagination component', () => {
            expect(wrapper.vm.hasPagination).toBeTruthy()
            expect(wrapper.findComponent(Pagination).exists()).toBeTruthy()
        })

        it('propagates update:page event when pagination changes', async () => {
            const paginationComponent = wrapper.findComponent(Pagination)
            await paginationComponent.vm.$emit('update:page', 2)

            expect(wrapper.emitted('update:page')).toBeTruthy()
        })

        it('propagates update:rows-per-page event when pagination limit changes', async () => {
            // for now just update limit directly, when implementing the limit select this must be replaced:
            wrapper.vm.limit = 20

            expect(wrapper.emitted('update:rows-per-page')).toBeTruthy()
        })
    })

    describe('Sorting', () => {
        let wrapper

        describe('when table is not sorted by any field', () => {
            beforeEach(async () => {
                wrapper = shallowMount(Table, {
                    props: {
                        columns: SimpleTableWithSortableColumnsFixtures.columns,
                        rows: SimpleTableWithSortableColumnsFixtures.rows,
                        localSort: true,
                    },
                })

                await flushPromises()
            })

            it('emits update:sort-by event when a sortable column is clicked', async () => {
                const sortableColumn = wrapper.find('table thead th.sortable')
                await sortableColumn.trigger('click')

                expect(wrapper.emitted('update:sort-by')).toBeTruthy()
                expect(wrapper.emitted('update:sort-by')[0][0]).toBe('id')
            })

            it('emits update:sort-direction event with default "asc" value when a sortable column is clicked', async () => {
                const sortableColumn = wrapper.find('table thead th.sortable')
                await sortableColumn.trigger('click')

                expect(wrapper.emitted('update:sort-direction')).toBeTruthy()
                expect(wrapper.emitted('update:sort-direction')[0][0]).toBe('asc')
            })

            it("doesn't emit update:sort-by event when a non-sortable column is clicked", async () => {
                const sortableColumn = wrapper.find('table thead th:not(.sortable)')
                await sortableColumn.trigger('click')

                expect(wrapper.emitted('update:sort-by')).toBeFalsy()
            })

            it("doesn't emit update:sort-direction event when a non-sortable column is clicked", async () => {
                const sortableColumn = wrapper.find('table thead th:not(.sortable)')
                await sortableColumn.trigger('click')

                expect(wrapper.emitted('update:sort-direction')).toBeFalsy()
            })
        })

        describe('when table is sorted by a specific field in ascending direction', () => {
            beforeEach(async () => {
                wrapper = shallowMount(Table, {
                    props: {
                        columns: SimpleTableWithSortableColumnsFixtures.columns,
                        rows: SimpleTableWithSortableColumnsFixtures.rows,
                        localSort: true,
                        sortBy: 'id',
                        sortDirection: 'asc',
                    },
                })
            })

            it('has sort-active class on the active sorting column', () => {
                expect(wrapper.find('table thead th.sort-active').exists()).toBeTruthy()
            })

            it('has sort-asc class on the active sorting column', () => {
                expect(wrapper.find('table thead th.sort-asc').exists()).toBeTruthy()
            })

            it('emits update:sort-direction event with "desc" value when active sorting column is clicked', async () => {
                const sortableColumn = wrapper.find('table thead th.sortable')
                await sortableColumn.trigger('click')

                expect(wrapper.emitted('update:sort-direction')).toBeTruthy()
                expect(wrapper.emitted('update:sort-direction')[0][0]).toBe('desc')
            })
        })

        describe('when table is sorted by a specific field in descending direction', () => {
            beforeEach(async () => {
                wrapper = shallowMount(Table, {
                    props: {
                        columns: SimpleTableWithSortableColumnsFixtures.columns,
                        rows: SimpleTableWithSortableColumnsFixtures.rows,
                        localSort: true,
                        sortBy: 'id',
                        sortDirection: 'desc',
                    },
                })
            })

            it('has sort-active class on the active sorting column', () => {
                expect(wrapper.find('table thead th.sort-active').exists()).toBeTruthy()
            })

            it('has sort-desc class on the active sorting column', () => {
                expect(wrapper.find('table thead th.sort-desc').exists()).toBeTruthy()
            })

            it('emits update:sort-direction event with "asc" value when active sorting column is clicked', async () => {
                const sortableColumn = wrapper.find('table thead th.sortable')
                await sortableColumn.trigger('click')

                expect(wrapper.emitted('update:sort-direction')).toBeTruthy()
                expect(wrapper.emitted('update:sort-direction')[0][0]).toBe('asc')
            })
        })
    })

    describe('Row Selection', () => {
        let wrapper

        beforeEach(async () => {
            wrapper = shallowMount(Table, {
                props: {
                    columns: SimpleTableFixture.columns,
                    rows: SimpleTableFixture.rows,
                    selectableRows: true,
                },
            })

            await flushPromises()
        })

        describe('when select-all-rows checkbox is toggled', () => {
            it('selects all rows when select-all-rows header checkbox is toggled on', () => {
                wrapper.vm.selectToggleAllRows = true

                expect(wrapper.vm.selectedRows.length).toBe(wrapper.vm.rows.length)
            })

            it('clears the selection when select-all-rows header checkbox is toggled off', () => {
                wrapper.vm.selectToggleAllRows = false

                expect(wrapper.vm.selectedRows.length).toBe(0)
            })
        })

        describe("when row checkbox's are toggled", () => {
            it('selects a specific row', () => {
                wrapper.vm.selectToggleRow(true, wrapper.vm.rows[0])

                expect(wrapper.vm.selectedRows.length).toBe(1)
            })

            it('clear row selection', () => {
                wrapper.vm.selectToggleRow(true, wrapper.vm.rows[0])

                expect(wrapper.vm.selectedRows.length).toBe(1)

                wrapper.vm.selectToggleRow(false, wrapper.vm.rows[0])

                expect(wrapper.vm.selectedRows.length).toBe(0)
            })
        })
    })

    describe('Row transitions', () => {
        let wrapper

        beforeEach(async () => {
            wrapper = shallowMount(Table, {
                props: {
                    columns: SimpleTableFixture.columns,
                    rows: SimpleTableFixture.rows,
                },
            })

            await flushPromises()
        })

        it('hides rows on before enter', () => {
            let elMock = {
                style: {
                    opacity: 1,
                    height: 1,
                },
            }

            wrapper.vm.onBeforeEnter(elMock)

            expect(elMock.style.opacity).toBe(0)
            expect(elMock.style.height).toBe(0)
        })
    })
})
