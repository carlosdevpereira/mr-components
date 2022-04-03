<template>
	<label
		class="mr-select-container"
		:class="classes"
		:disabled="isDisabled"
		tabindex="0"
		@click="!isDisabled ? visible = !visible : undefined"
		@focusout="visible = false"
	>
		{{ valueOrLabel }}

		<Icon :name="icon" />

		<transition
			name="pop-in-fade"
			appear
		>
			<ul
				v-if="visible && !isDisabled"
				class="mr-select"
			>
				<li
					v-for="(option, key) in options"
					:key="key"
					class="mr-select-option"
					:class="{selected: currentValue === option}"
					@click="currentValue = option"
				>
					{{ option[optionName] }}
				</li>
			</ul>
		</transition>
	</label>
</template>

<script>
import 'remixicon/fonts/remixicon.css'
import Icon from "../Icon/index.vue"
export const themes = ['default', 'solid', 'outlined']
export const variants = ['default', 'primary', 'secondary', 'danger', 'warning', 'success', 'info']
export const sizes = ['sm', 'md', 'lg']

export default {
	components: { Icon },

	props: {
		theme: {
			type: String,
			default: themes[0],
			validator: v => !v || themes.includes(v),
		},

		variant: {
			type: String,
			default: variants[0],
			validator: v => variants.includes(v),
		},

		size: {
			type: String,
			default: "md",
			validator: v => sizes.includes(v),
		},

		disabled: {
			type: Boolean,
			default: false,
		},

		label: {
			type: String,
			default: 'Please select an option'
		},

		value: {
			type: [Object, Number, String],
			default: null
		},

		options: {
			type: Array,
			default: () => []
		},

		optionKey: {
			type: String,
			default: "key"
		},

		optionName: {
			type: String,
			default: "name"
		}
	},

	emits: ["update:visible", "update:value"],

	data() {
		return {
			visible: false
		};
	},

	computed: {
		currentValue: {
			get() {
				return this.value;
			},

			set(value) {
				this.$emit("update:value", value);
			}
		},

		valueOrLabel() {
			if (this.value) {
				if (this.value[this.optionName]) return this.value[this.optionName]

				return this.value
			}

			return this.label
		},

		icon() {
			if (this.visible) return 'arrow-drop-up-line'

			return 'arrow-drop-down-line'
		},

		isDisabled() {
			return this.disabled || !this.options.length
		},

		classes() {
			return `${this.theme}-theme variant-${this.variant} size-${this.size} ${this.visible ? "state-opened" : ""}`;
		},
	}
}
</script>

<style lang="scss" src="./index.scss" />