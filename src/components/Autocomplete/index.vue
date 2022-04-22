<template>
	<div
		v-click-outside="close"
		class="mr-autocomplete-container"
		:class="classes"
	>
		<Input
			v-model="searchValue"
			class="mr-autocomplete-input"
			:size="size"
			:label="label"
			:theme="theme"
			:inline="inline"
			:variant="variant"
			:disabled="disabled"
			:placeholder="placeholder"
			:label-position="labelPosition"
			:icon="icon"
			:icon-position="iconPosition"
			@focus="onInputFocus"
			@update:model-value="filterStart"
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

		searchValue: {
			get() {
				if (this.modelValue) return this.modelValue.name || this.modelValue

				return this.search
			},

			set(value) {
				this.search = value
				this.savedPosition = 0
				this.$emit('update:model-value', null)
			}
		},

		results() {
			if (this.getItems) {
				return this.remoteItems
			}

			return this.localItems
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
		search: {
			handler: debounce(async function(value) {
				if (this.getItems) {
					await this.getRemoteItems(value)
				}

				this.isOpen = !!(this.results && this.results.length)
				this.loading = false
			}, 500)
		},

		isOpen(isOpen) {
			if (isOpen && this.savedPosition) {
				this.$nextTick(() => {
					this.$refs.resultsContainer.scrollTo({ top: this.savedPosition, behavior: 'smooth' })
				})
			}
		}
	},

	methods: {
		filterStart() {
			this.loading = true
		},

		async getRemoteItems(value, reset = true) {
			if (reset === true) this.remoteItems = []

			let items
			if (!this.lazy) items = await this.getItems(value)
			else
				items = await this.getItems(value, { page: this.page, limit: this.limit })

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
</script>