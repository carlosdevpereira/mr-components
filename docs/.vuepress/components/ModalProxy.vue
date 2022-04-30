<template>
	<Button
		label="Open modal"
		@click="$refs.modal.open()"
	/>

	<Modal
		ref="modal"
		v-bind="$attrs"
	>
		This is an example modal
		<br>
		<br>
		This content is injected through the default slot
	</Modal>
</template>