<template>
	<div class="mr-table-container">
		<header class="mr-table-header">
			<div class="mr-table-search" />

			<div class="mr-table-options">
				<Dropdown
					v-if="filterable"
					theme="text-solid"
					label="Add Filter"
					class="add-filter-action"
				>
					<Button
						v-for="(col, index) in columns"
						:key="index"
						theme="text"
						size="sm"
						class="mr-dropdown-option add-filter-action-column"
						@click="addFilterFor(col)"
					>
						{{ col.name }}
					</Button>
				</Dropdown>

				<Dropdown
					theme="text-solid"
					label="Columns"
					class="column-visibility-panel-toggle"
				>
					<Checkbox
						v-for="(col, index) in columns"
						:key="index"
						:label="col.name"
						:model-value="!col.hidden"
						:disabled="!col.hidden && visibleColumns.length === 1"
						@update:model-value="col.hidden = !col.hidden"
					/>
				</Dropdown>
			</div>
		</header>

		<transition
			name="pop-out"
			appear
			@before-enter="onBeforeEnter"
			@enter="onEnter"
		>
			<section
				v-if="filterable && filters.length"
				class="mr-table-filters"
			>
				<Dropdown
					v-for="(filter, filterIndex) in filters"
					:key="filterIndex"
					theme="text-solid"
					:label="filterLabel(filter)"
					:title="filterLabel(filter, false)"
					icon-position="end"
				>
					<div class="mr-table-filter-operator">
						<label class="mr-table-filter-label">
							Operator:
						</label>

						<Select
							v-model="filter.operator"
							class="mr-table-filter-operator-select"
							:options="operators"
							option-name="label"
							@update:model-value="filtersChanged"
						/>
					</div>

					<div class="mr-table-filter-value">
						<label class="mr-table-filter-label">
							Value:
						</label>

						<Input
							v-model="filter.value"
							placeholder="Value"
							@update:model-value="filtersChanged"
						/>
					</div>

					<Button
						class="mt-2 delete-filter-action"
						theme="text-solid"
						variant="danger"
						@click="deleteFilter(filter)"
					>
						Remove
					</Button>
				</Dropdown>
			</section>
		</transition>

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
				@leave="onLeave"
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
			v-if="selectableRows"
			to="body"
		>
			<transition
				appear
				:css="false"
				@enter="onEnterRowSelectionPanel"
				@leave="onLeaveRowSelectionPanel"
			>
				<div
					v-if="selectedRows.length"
					class="mr-table-row-selection-panel"
				>
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
			</transition>
		</Teleport>
	</div>
</template>

<script>
import './index.scss'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import debounce from 'lodash/debounce'
import Button from '../Button/index.vue'
import Dropdown from '../Dropdown/index.vue'
import Checkbox from '../Checkbox/index.vue'
import Icon from '../Icon/index.vue'
import Pagination from '../Pagination/index.vue'
import Spinner from '../Spinner/index.vue'
import Select from '../Select/index.vue'
import Input from '../Input/index.vue'
import localFiltering from '../../utils/local-filtering'

export default {
	name: 'Table',

	components: {
		Button,
		Dropdown,
		Checkbox,
		Pagination,
		Spinner,
		Icon,
		Select,
		Input
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

		filterable: {
			type: Boolean,
			default: false
		},

		localFiltering: {
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
		'update:filters'
	],

	data() {
		return {
			selectedRows: [],
			columnVisibilityPanelIsOpen: false,
			filterCreationIsOpen: false,
			filters: [],
			operators: [
				{ key: 'eq', label: 'is equal to' },
				{ key: 'df', label: 'is different from' },
				{ key: 'ut', label: 'is upper than' },
				{ key: 'lt', label: 'is lower than' },
				{ key: 'uet', label: 'is upper or equal to' },
				{ key: 'let', label: 'is lower or equal to' },
				{ key: 'icontains', label: 'contains' },
				{ key: 'contains', label: 'contains (case sensitive)' },
				{ key: 'istarts', label: 'starts with' },
				{ key: 'starts', label: 'starts with (case sensitive)' },
				{ key: 'iends', label: 'ends with' },
				{ key: 'ends', label: 'ends with (case sensitive)' },
			]
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
			if (!this.localPagination || this.page === 0 || this.totalRows === 0) {
				if (!this.localFiltering) return this.sortedRows
				return localFiltering.filter(this.sortedRows, this.filters)
			}

			if (!this.localFiltering) return this.sortedRows.filter((r, i) => {
				return (this.currentPage - 1) * this.limit <= i && i < this.currentPage * this.limit
			})

			return localFiltering.filter(this.sortedRows, this.filters)
				.filter((r, i) => {
					return (this.currentPage - 1) * this.limit <= i
						&& i < this.currentPage * this.limit
				})
		},

		filterLabel() {
			return (filter, limitLength = true) => {
				let label = filter.column.name

				// Operator
				if (!filter.operator) label += " ____"
				else {
					label += " " + filter.operator.label
				}

				// Value
				// (value can be trimmed in string length or not)
				if (!filter.value) label += " ____"
				else {
					if (limitLength) {
						const charLimit = 25
						const isBiggerThanCharLimit = filter.value.length > charLimit

						label += " " + filter.value.substring(0, charLimit)
						if (isBiggerThanCharLimit) label += "..."
					}
					else {
						label += " " + filter.value
					}
				}

				return label
			}
		},

		currentPage: {
			get() {
				return this.page
			},

			set(value) {
				this.scrollToTopOfElement(this.$el)

				this.$emit('update:page', value)
			},
		},

		limit: {
			get() {
				return this.rowsPerPage
			},

			set(value) {
				if (this.rowsPerPage > value) {
					this.scrollToTopOfElement(this.$el)
				}

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

		addFilterFor(column) {
			this.filters.push({
				column,
				operator: this.operators[0],
				value: null
			})
		},

		deleteFilter(filter) {
			const filterIndex = this.filters.indexOf(filter)
			this.filters.splice(filterIndex, 1)
		},

		filtersChanged: debounce(function() {
			this.$emit('update:filters', this.filters)
		}, 700),

		scrollToTopOfElement(element) {
			window.scrollTo({
				top: element.offsetTop - 120,
				behavior: 'smooth',
			})
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
				onComplete: () => done()
			})

		},

		onLeave(el, done) {
			gsap.to(el, {
				opacity: 0,
				height: '0',
				delay: el.dataset.index * 0.05,
				onComplete: () => done(),
			})
		},

		onEnterRowSelectionPanel(el, done) {
			gsap.from(el, {
				opacity: 0,
				translateY: '150%',
				onComplete: done(),
			})
		},

		onLeaveRowSelectionPanel(el, done) {
			gsap.to(el, {
				opacity: 0,
				translateY: '150%',
				onComplete: () => done(),
			})
		}
	},
}
</script>
