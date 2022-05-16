
<template>
	<label
		class="mr-input-container"
		:class="classes"
		:disabled="isDisabled"
		:aria-invalid="hasErrors || undefined"
	>
		<Icon
			v-if="icon"
			:name="icon"
		/>

		<span
			v-if="label"
			class="mr-input-label"
			v-text="label"
		/>

		<input
			v-model="currentValue"
			type="text"
			:placeholder="placeholder"
			:disabled="isDisabled"
			:required="required"
			:aria-errormessage="hasErrors ? errors : undefined"
			@focus="$emit('focus')"
		>

		<div
			v-if="hasErrors"
			class="mr-input-error-messages"
		>
			<small
				v-for="(error, index) in errors"
				:key="index"
				class="mr-input-error"
			>
				{{ error }}
			</small>
		</div>
	</label>
</template>

<script>
import './index.scss'
import 'remixicon/fonts/remixicon.css'
import Icon from '../Icon/index.vue'
import props from './props'

export default {
	name: 'Input',

	components: {
		Icon
	},

	props,

	emits: ["update:model-value", "focus"],

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
			if (this.label) classes.push(` has-label-text`)
			if (this.labelPosition) classes.push(` label-position-${this.labelPosition}`)
			if (this.icon) classes.push(' has-icon icon-position-' + this.iconPosition)

			return classes.join('')
		},

		hasErrors() {
			return this.errors.length > 0
		}
	}
}
</script>