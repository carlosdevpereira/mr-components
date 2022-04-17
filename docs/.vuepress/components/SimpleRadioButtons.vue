<template>
	<div>
		<Radio-Button
			v-model="value"
			value="first"
			label="First"
		/>
		<Radio-Button
			v-model="value"
			value="second"
			label="Second"
		/>
		<Radio-Button
			v-model="value"
			value="third"
			label="Third"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: 'first',
		}
	},
}
</script>
