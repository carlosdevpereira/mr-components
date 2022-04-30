<template>
	<Message
		ref="message"
		v-bind="$attrs"
	/>
</template>

<script>
export default {
	props: {
		body: {
			type: String,
			default: ''
		}
	},

	mounted() {
		const interval = setInterval(() => {
			if (this.$refs.message) {
				this.$refs['message'].show('Example message', this.body)
				clearInterval(interval)
			}
		}, 50)
	}
}
</script>
