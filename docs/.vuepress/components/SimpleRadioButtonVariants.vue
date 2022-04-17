<template>
	<div>
		<Radio-Button
			v-model="value"
			value="default"
			label="Default"
		/>
		<Radio-Button
			v-model="value"
			value="primary"
			variant="primary"
			label="Primary"
		/>
		<Radio-Button
			v-model="value"
			value="secondary"
			variant="secondary"
			label="Secondary"
		/>
		<Radio-Button
			v-model="value"
			value="danger"
			variant="danger"
			label="Danger"
		/>
		<Radio-Button
			v-model="value"
			value="warning"
			variant="warning"
			label="Warning"
		/>
		<Radio-Button
			v-model="value"
			value="success"
			variant="success"
			label="Success"
		/>
		<Radio-Button
			v-model="value"
			value="info"
			variant="info"
			label="Info"
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
