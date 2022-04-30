<template>
	<Message
		v-if="!close"
		v-model="value"
		v-bind="$attrs"
		@close="close = true"
	/>
</template>

<script>
export default {
	data() {
		return {
			close: false,
		}
	},
}
</script>