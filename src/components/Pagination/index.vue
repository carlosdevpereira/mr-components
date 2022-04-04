<template>
	<div class="mr-pagination flex justify-content-between">
		<div class="flex align-items-center">
			<span class="page-first-item">
				{{ pageInitialItem }}
			</span> <Icon name="separator" />
			<span class="page-last-item">
				{{ pageLastItem }}
			</span>
			of
			<span class="total-items-count">
				{{ totalCount }}
			</span>
		</div>

		<div class="mr-pagination-pages flex align-items-center">
			<Select
				size="sm"
				class="row-limit-per-page"
				:model-value="limit"
				:options="limitOptions"
				@update:model-value="updateLimit"
			/>

			<Button
				size="sm"
				theme="text-solid"
				:disabled="page === 1"
				class="go-to-previous-page"
				@click="goToPreviousPage"
			>
				<Icon name="arrow-left-line" />
			</Button>

			<span class="ml-3 mr-3">
				<span class="current-page">
					{{ page }}
				</span> of
				<span class="total-pages">
					{{ totalPages }}
				</span>
			</span>

			<Button
				theme="text-solid"
				size="sm"
				:disabled="totalPages === page"
				class="go-to-next-page"
				@click="goToNextPage"
			>
				<Icon name="arrow-right-line" />
			</Button>
		</div>
	</div>
</template>

<script>
import Button from '../Button/index.vue'
import Select from '../Select/index.vue'
import Icon from '../Icon/index.vue'

export default {
	components: {
		Icon,
		Button,
		Select
	},

	props: {
		page: {
			type: Number,
			default: 1,
		},

		limit: {
			type: Number,
			default: 10,
		},

		totalCount: {
			type: Number,
			default: 0,
		},
	},

	emits: ['update:page', 'update:limit'],

	computed: {
		pageInitialItem() {
			return (this.page - 1) * this.limit + 1
		},

		pageLastItem() {
			const lastItem = this.page * this.limit

			return lastItem > this.totalCount ? this.totalCount : lastItem
		},

		totalPages() {
			return Math.ceil(this.totalCount / this.limit)
		},

		limitOptions() {
			return [10, 25, 50, 100]
		}
	},

	methods: {
		goToNextPage() {
			this.$emit('update:page', this.page + 1)
		},

		goToPreviousPage() {
			this.$emit('update:page', this.page - 1)
		},

		updateLimit(limit) {
			this.$emit('update:limit', limit)
		}
	},
}
</script>

<style lang="scss" src="./index.scss" />
