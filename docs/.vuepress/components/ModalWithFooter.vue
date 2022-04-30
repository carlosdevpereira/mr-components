<template>
	<Button
		label="Open modal"
		@click="$refs.modal.open()"
	/>

	<Modal
		ref="modal"
		v-bind="$attrs"
	>
		This modal has a bottom footer
		<br>
		<br>
		The footer content can be injected trough the `footer` slot

		<template #footer>
			<Button
				theme="text"
				label="Cancel"
				@click="$refs.modal.close()"
			/>

			<Button
				label="Save"
				@click="$refs.modal.close()"
			/>
		</template>
	</Modal>
</template>