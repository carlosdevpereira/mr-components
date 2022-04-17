<template>
	<div class="components-inline">
		<Radio-Button
			v-model="value"
			size="sm"
			value="small"
			label="Small"
		/>
		<Radio-Button
			v-model="value"
			size="md"
			value="medium"
			label="Medium"
		/>
		<Radio-Button
			v-model="value"
			size="lg"
			value="large"
			label="Large"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: 'default',
		}
	},
}
</script>
