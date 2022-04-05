<template>
	<div class="mr-table-container">
		<header class="mr-table-header">
			<div class="mr-table-search">
				<!-- @TODO: Search bar -->
				<!-- @TODO: Filters list & add filter button -->
			</div>

			<div class="mr-table-options">
				<Button
					theme="text-solid"
					size="sm"
					icon="more-line"
					class="column-visibility-panel-toggle"
					@click="columnVisibilityPanelIsOpen = !columnVisibilityPanelIsOpen"
				/>

				<transition
					name="pop-in-fade"
					appear
				>
					<div
						v-if="columnVisibilityPanelIsOpen"
						class="columns-visibility-panel"
					>
						<Checkbox
							v-for="(col, index) in columns"
							:key="index"
							:label="col.name"
							:model-value="!col.hidden"
							@update:model-value="col.hidden = !col.hidden"
						/>
					</div>
				</transition>
			</div>
		</header>

		<table
			class="mr-table mr-table-fixed-header"
			:class="{ 'is-loading': loading }"
		>
			<thead>
				<tr>
					<th
						v-if="selectableRows"
						class="row-selection-cell"
					>
						<Checkbox
							v-model="selectToggleAllRows"
							variant="success"
						/>
					</th>

					<!-- @TODO: Column sorting for small screens
						(Can be a select component with the table columns
						as options and another select with the directions) -->
					<th
						v-for="(col, index) in visibleColumns"
						:key="index"
						:class="`${col.sortable ? 'sortable' : ''}
                                 ${sortBy === col.key ? 'sort-active sort-' + sortDirection : ''}`"
						@click="col.sortable ? setSort(col.key) : undefined"
					>
						{{ col.name }}

						<Icon
							v-if="sortBy === col.key"
							:name="`sort-${sortDirection}`"
						/>
					</th>
				</tr>
			</thead>

			<transition-group
				v-if="!loading"
				name="pop-out"
				appear
				tag="tbody"
				:css="false"
				@before-enter="onBeforeEnter"
				@enter="onEnter"
			>
				<tr
					v-for="(row, index) in visibleRows"
					:key="index"
					:class="{ active: isSelected(row) }"
				>
					<td
						v-if="selectableRows"
						class="row-selection-cell"
						data-label="Selected"
					>
						<Checkbox
							variant="success"
							:model-value="isSelected(row)"
							@update:model-value="v => selectToggleRow(v, row)"
						/>
					</td>

					<td
						v-for="(col, colIndex) in visibleColumns"
						:key="colIndex"
						:data-label="col.name"
					>
						<slot
							:name="`cell(${col.key})`"
							:row="row"
							:column="col"
							:value="row[col.key]"
						>
							{{ row[col.key] }}
						</slot>
					</td>
				</tr>
			</transition-group>

			<tbody v-else-if="loading">
				<tr>
					<td
						class="loading-cell"
						:colspan="visibleColumns.length"
					>
						<Spinner />
					</td>
				</tr>
			</tbody>
		</table>

		<footer
			v-if="!loading"
			class="mr-table-footer"
		>
			<!-- @TODO: On pagination change, scroll to the top of the table -->
			<Pagination
				v-if="hasPagination"
				v-model:page="currentPage"
				v-model:limit="limit"
				:total-count="totalRows"
			/>

			<div
				v-else
				class="total-results"
			>
				{{ totalRows || rows.length }} Results
			</div>
		</footer>

		<Teleport
			v-if="selectableRows && selectedRows.length"
			to="body"
		>
			<div class="mr-table-row-selection-panel">
				<div class="row-selection-count">
					<strong>
						{{ selectedRows.length }}
					</strong>
					<small>selected</small>

					<Button
						class="clear-row-selection"
						variant="primary"
						@click="clearRowSelection"
					>
						Clear selection
					</Button>
				</div>

				<div class="mr-table-row-selection-actions">
					<slot
						name="selection-actions"
						:rows="selectedRows"
					/>
				</div>
			</div>
		</Teleport>
	</div>
</template>

<script>
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import Button from '../Button/index.vue'
import Checkbox from '../Checkbox/index.vue'
import Icon from '../Icon/index.vue'
import Pagination from '../Pagination/index.vue'
import Spinner from '../Spinner/index.vue'

export default {
	name: 'Table',

	components: {
		Button,
		Checkbox,
		Pagination,
		Spinner,
		Icon,
	},

	props: {
		loading: {
			type: Boolean,
			default: false,
		},

		columns: {
			type: Array,
			default: () => [],
		},

		rows: {
			type: Array,
			default: () => [],
		},

		selectableRows: {
			type: Boolean,
			default: false,
		},

		page: {
			type: Number,
			default: 0,
		},

		rowsPerPage: {
			type: Number,
			default: 10,
		},

		totalRows: {
			type: Number,
			default: 0,
		},

		localPagination: {
			type: Boolean,
			default: false,
		},

		sortBy: {
			type: String,
			default: '',
		},

		sortDirection: {
			type: String,
			default: 'asc',
			validator: value => ['asc', 'desc'].includes(value.toLowerCase()),
		},

		localSort: {
			type: Boolean,
			default: false,
		},
	},

	emits: [
		'selected-rows-changed',
		'update:columns',
		'update:page',
		'update:rows-per-page',
		'update:sort-by',
		'update:sort-direction',
	],

	data() {
		return {
			selectedRows: [],
			columnVisibilityPanelIsOpen: false,
		}
	},

	computed: {
		hasPagination() {
			return this.currentPage > 0 && this.limit > 0 && this.totalRows > 0
		},

		sortedRows() {
			if (!this.localSort || !this.sortField) return this.rows

			/* istanbul ignore next */
			return [...this.rows].sort((a, b) => {
				if (this.sortFieldDirection === 'asc') {
					if (a[this.sortField] > b[this.sortField]) return 1
					if (a[this.sortField] < b[this.sortField]) return -1

					return 0
				}

				if (a[this.sortField] < b[this.sortField]) return 1
				if (a[this.sortField] > b[this.sortField]) return -1

				return 0
			})
		},

		visibleRows() {
			if (!this.localPagination || this.page === 0 || this.totalRows === 0)
				return this.sortedRows

			return this.sortedRows.filter((r, i) => {
				return (this.currentPage - 1) * this.limit <= i && i < this.currentPage * this.limit
			})
		},

		currentPage: {
			get() {
				return this.page
			},

			set(value) {
				this.$emit('update:page', value)
			},
		},

		limit: {
			get() {
				return this.rowsPerPage
			},

			set(value) {
				this.$emit('update:rows-per-page', value)
			},
		},

		sortField: {
			get() {
				return this.sortBy
			},

			set(value) {
				this.$emit('update:sort-by', value)
			},
		},

		sortFieldDirection: {
			get() {
				return this.sortDirection
			},

			set(value) {
				this.$emit('update:sort-direction', value)
			},
		},

		visibleColumns: {
			get() {
				return this.columns.filter(column => !column.hidden)
			},

			set(value) {
				this.$emit('update:columns', value)
			},
		},

		selectToggleAllRows: {
			get() {
				return this.selectedRows.length === this.rows.length
			},

			set(value) {
				if (value === true) {
					this.selectedRows = []
					this.selectedRows.push(...this.rows)
				} else {
					this.selectedRows = []
				}
			},
		},
	},

	watch: {
		selectedRows(selectedRows) {
			this.$emit('selected-rows-changed', ...selectedRows)
		},
	},

	methods: {
		setSort(field) {
			if (this.sortBy === field) {
				this.sortFieldDirection = this.sortFieldDirection === 'asc' ? 'desc' : 'asc'
			} else {
				this.sortField = field
				this.sortFieldDirection = 'asc'
			}
		},

		isSelected(row) {
			return this.selectedRows.indexOf(row) > -1
		},

		selectToggleRow(currentlySelected, row) {
			if (currentlySelected === true) {
				this.selectedRows.push(row)
			} else {
				const rowIndex = this.selectedRows.indexOf(row)
				this.selectedRows.splice(rowIndex, 1)
			}
		},

		clearRowSelection() {
			this.selectedRows = []
		},

		onBeforeEnter(el) {
			el.style.opacity = 0
			el.style.height = 0
		},

		onEnter(el, done) {
			gsap.to(el, {
				opacity: 1,
				height: 'auto',
				delay: el.dataset.index * 0.05,
				onComplete: done,
			})
		},
	},
}
</script>

<style lang="scss" src="./index.scss" />
