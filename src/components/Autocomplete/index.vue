<template>
	<div
		v-click-outside="close"
		class="mr-autocomplete-container"
		:class="classes"
	>
		<Input
			class="mr-autocomplete-input"
			:size="size"
			:label="label"
			:theme="theme"
			:inline="inline"
			:variant="variant"
			:disabled="disabled"
			:placeholder="placeholder"
			:model-value="searchValue"
			:label-position="labelPosition"
			:icon="icon"
			:icon-position="iconPosition"
			@focus="onInputFocus"
			@update:model-value="filter"
		/>

		<transition
			name="pop-in-fade"
			appear
		>
			<div
				v-if="isOpen"
				ref="resultsContainer"
				v-infinite-scroll="lazy ? reachedBottom : undefined"
				class="mr-autocomplete"
			>
				<li
					v-for="(item, key) in results"
					:key="key"
					class="mr-autocomplete-option"
					:class="{'selected': modelValue === item }"
					@click="e => selectItem(item, e)"
				>
					{{ item.name || item }}
				</li>
			</div>
		</transition>
	</div>
</template>

<script>
import { ClickOutside } from '../../directives/ClickOutside'
import { InfiniteScroll } from '../../directives/InfiniteScroll'
import Input from '../Input/index.vue'
import inputProps from '../Input/props'
import debounce from 'lodash/debounce'
import './index.scss'

export default {
	name: 'Autocomplete',

	components: {
		Input
	},

	directives: {
		'click-outside': ClickOutside,
		'infinite-scroll': InfiniteScroll
	},

	props: {
		items: {
			type: Array,
			default: () => []
		},

		getItems: {
			type: Function,
			default: null
		},

		lazy: {
			type: Boolean,
			default: false
		},

		limit: {
			type: Number,
			default: 10
		},

		...inputProps
	},

	emits: ['update:model-value'],

	data() {
		return {
			search: '',
			loading: false,
			isOpen: false,
			page: 1,
			savedPosition: 0,

			remoteItems: [],
		}
	},

	computed: {
		classes() {
			let classes = ''
			if (this.loading === true) classes += "loading"
			if (this.inline === true) classes += " label-input-inline"

			return classes
		},

		searchValue() {
			if (this.modelValue)
				return this.modelValue.name || this.modelValue

			return this.search
		},

		results() {
			return this.getItems ? this.remoteItems : this.localItems
		},

		localItems() {
			let startsWithItems = this.items.filter(item => {
				if (item.name && typeof item.name === 'string') return item.name.toLowerCase().startsWith(this.search.toLowerCase())
				if (typeof item === 'string') return item.toLowerCase().startsWith(this.search.toLowerCase())

				return false
			})

			if (startsWithItems.length) {
				return startsWithItems
			}

			return this.items.filter(item => {
				if (item.name && typeof item.name === 'string') return item.name.toLowerCase().includes(this.search.toLowerCase())
				if (typeof item === 'string') return item.toLowerCase().includes(this.search.toLowerCase())

				return false
			})
		}
	},

	watch: {
		isOpen(isOpen) {
			if (isOpen && this.savedPosition) {
				/* istanbul ignore next */
				this.$nextTick(() => {
					this.$refs.resultsContainer.scrollTo({ top: this.savedPosition, behavior: 'smooth' })
				})
			}
		}
	},

	methods: {
		filter(value) {
			this.loading = true

			this.search = value
			this.savedPosition = 0
			this.$emit('update:model-value', null)

			// runs the remote search if configured to do so
			// if not the localItems computed will update the
			// suggestions based on the search string
			useRemoteSearch.call(this, value)
		},

		async getRemoteItems(value, reset = true) {
			if (reset === true) this.remoteItems = []

			let items
			if (!this.lazy) items = await this.getItems(value)
			else {
				items = await this.getItems(value, { page: this.page, limit: this.limit })
			}

			if (items && items.length) {
				if (reset === true) this.remoteItems = items
				else this.remoteItems.push(...items)
			}
		},

		close() {
			this.isOpen = false
		},

		selectItem(item, event) {
			this.$emit('update:model-value', item)
			this.savedPosition = event.layerY - 70

			this.close()
		},

		onInputFocus() {
			if (this.searchValue && this.results && this.results.length) {
				this.isOpen = true
			}
		},

		async reachedBottom() {
			this.page = this.page + 1
			if (this.getItems) {
				await this.getRemoteItems(this.search, false)
			}
		}
	},
}

export const useRemoteSearch = debounce(async function(value) {
	if (this.getItems) {
		await this.getRemoteItems(value)
	}

	this.isOpen = !!(this.results && this.results.length)
	this.loading = false
}, 500)
</script>