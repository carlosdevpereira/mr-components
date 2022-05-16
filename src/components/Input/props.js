export const themes = ['default', 'solid', 'outlined']
export const variants = ['default', 'primary', 'secondary', 'danger', 'warning', 'success', 'info']
export const sizes = ['sm', 'md', 'lg']
export const labelPositions = ['start', 'center', 'end']
export const iconPositions = ['start', 'end']

export default {
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
		default: 'md',
		validator: v => sizes.includes(v),
	},

	disabled: {
		type: Boolean,
		default: false,
	},

	label: {
		type: String,
		default: '',
	},

	labelPosition: {
		type: String,
		default: 'start',
		validator: v => labelPositions.includes(v),
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
		validator: v => iconPositions.includes(v),
	},

	placeholder: {
		type: String,
		default: '',
	},

	modelValue: {
		type: [Object, Number, String],
		default: null,
	},

	errors: {
		type: Array,
		default: () => [],
	},

	required: {
		type: Boolean,
		default: false,
	},
}
