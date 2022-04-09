
<template>
	<label
		class="mr-input-container"
		:class="classes"
		:disabled="isDisabled"
	>
		<Icon
			v-if="icon"
			:name="icon"
		/>

		<span
			v-if="label"
			v-text="label"
		/>

		<textarea
			v-model="currentValue"
			:placeholder="placeholder"
			:disabled="isDisabled"
			:readonly="readOnly"
			:required="required"
			:maxlength="maxLength"
			:rows="rows"
			@input="textareaFitContent"
		/>
	</label>
</template>

<script>
import 'remixicon/fonts/remixicon.css'
import Icon from '../Icon/index.vue'

export const themes = ['default', 'solid', 'outlined']
export const variants = ['default', 'primary', 'secondary', 'danger', 'warning', 'success', 'info']
export const sizes = ['sm', 'md', 'lg']
export const heights = [...sizes, 'fit-content']

export default {
	name: 'Textarea',

	components: {
		Icon
	},

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

		icon: {
			type: String,
			default: '',
		},

		iconPosition: {
			type: String,
			default: 'start',
			validator: (v) => ['start', 'end'].includes(v)
		},

		placeholder: {
			type: String,
			default: ''
		},

		modelValue: {
			type: [Object, Number, String],
			default: null
		},

		readOnly: {
			type: Boolean,
			default: false
		},

		required: {
			type: Boolean,
			default: false
		},

		maxLength: {
			type: Number,
			default: null
		},

		height: {
			type: String,
			default: "fit-content",
			validator: v => heights.includes(v),
		},

		notResizable: {
			type: Boolean,
			default: false
		},

		notResizableHorizontally: {
			type: Boolean,
			default: false
		},

		notResizableVertically: {
			type: Boolean,
			default: false
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
			let classes = []

			if (this.theme) classes.push(`${this.theme}-theme`)
			if (this.variant) classes.push(` variant-${this.variant}`)
			if (this.size) classes.push(` size-${this.size}`)
			if (this.inline) classes.push(` inline`)
			if (this.labelPosition) classes.push(` label-position-${this.labelPosition}`)
			if (this.icon) classes.push(' has-icon icon-position-' + this.iconPosition)
			if (this.notResizable) classes.push(' not-resizable')
			if (this.notResizableHorizontally) classes.push(' not-resizable-horizontally')
			if (this.notResizableVertically) classes.push(' not-resizable-vertically')

			return classes.join('')
		},

		rows() {
			if (this.height === 'sm') {
				return 2
			} else if (this.height === 'lg') {
				return 8
			}

			return 4
		}
	},

	methods: {
		textareaFitContent(event) {
			if (this.height === 'fit-content') {
				event.target.style.height = event.target.scrollHeight + 2 + "px"
			}
		}
	}
}
</script>

<style lang="scss" src="../Input/index.scss"></style>

<style lang="scss" src="./index.scss"></style>