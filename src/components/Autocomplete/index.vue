<template>
	<div
		v-click-outside="close"
		class="mr-autocomplete-container"
		:class="classes"
	>
		<Input
			v-model="search"
			:inline="inline"
			v-bind="$attrs"
		/>

		<transition
			name="pop-in-fade"
			appear
		>
			<div
				v-if="isOpen"
				class="mr-autocomplete"
			>
				<li
					v-for="(result, key) in results"
					:key="key"
					class="mr-autocomplete-option"
				>
					{{ result.name || result }}
				</li>
			</div>
		</transition>
	</div>
</template>

<script>
import './index.scss'
import debounce from 'lodash/debounce'
import { ClickOutside } from '../../directives/ClickOutside'

export default {
	name: 'Autocomplete',

	directives: {
		'click-outside': ClickOutside
	},

	props: {
		fetch: {
			type: Function,
			required: true
		},

		inline: {
			type: Boolean,
			default: false
		}
	},

	emits: ['update:model-value'],

	data() {
		return {
			search: '',
			isOpen: false,
			loading: false,
			results: [],
		}
	},

	computed: {
		classes() {
			let classes = ''
			if (this.loading === true) classes += "loading"
			if (this.inline === true) classes += " label-input-inline"

			return classes
		}
	},

	watch: {
		search: debounce(async function(value) {
			this.loading = true

			try {
				this.results = await this.fetch(value)
				this.isOpen = this.results && this.results.length
			} catch (e) {
				throw e
			}

			this.loading = false
		}, 500)
	},

	methods: {
		updateValue(newValue) {
			this.$emit('update:model-value', newValue)
		},

		close() {
			this.isOpen = false
		}
	}
}
</script>