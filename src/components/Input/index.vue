
<template>
	<label
		class="mr-input-container"
		:class="classes"
		:disabled="isDisabled"
	>
		<span>
			{{ label ? label : '' }}
		</span>

		<input
			v-model="currentValue"
			type="text"
			:placeholder="placeholder"
			:disabled="isDisabled"
		>
	</label>
</template>

<script>
export const themes = ['default', 'solid', 'outlined']
export const variants = ['default', 'primary', 'secondary', 'danger', 'warning', 'success', 'info']
export const sizes = ['sm', 'md', 'lg']

export default {

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
			default: ''
		},

		labelPosition: {
			type: String,
			default: 'start',
			validator: (v) => ['start', 'center', 'end'].includes(v)
		},

		inline: {
			type: Boolean,
			default: false,
		},

		placeholder: {
			type: String,
			default: ''
		},

		modelValue: {
			type: [Object, Number, String],
			default: null
		},
	},

	emits: ["update:model-value"],

	computed: {
		currentValue: {
			get() {
				return this.modelValue;
			},

			set(value) {
				this.$emit("update:model-value", value);
			}
		},

		isDisabled() {
			return this.disabled
		},

		classes() {
			return `${this.theme}-theme variant-${this.variant} size-${this.size} ${this.inline ? 'inline' : ''} label-position-${this.labelPosition}`;
		},
	}
}
</script>

<style lang="scss" src="./index.scss" />