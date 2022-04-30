<template>
	<div class="components-inline">
		<Button
			label="Open small modal"
			@click="$refs.smallModal.open()"
		/>

		<Button
			label="Open medium modal"
			@click="$refs.mediumModal.open()"
		/>

		<Button
			label="Open large modal"
			@click="$refs.largeModal.open()"
		/>

		<Button
			label="Open extra large modal"
			@click="$refs.xlModal.open()"
		/>
	</div>

	<Modal
		ref="smallModal"
		size="sm"
		title="Small modal example"
	/>

	<Modal
		ref="mediumModal"
		size="md"
		title="Medium modal example"
	/>

	<Modal
		ref="largeModal"
		size="lg"
		title="Large modal example"
	/>

	<Modal
		ref="xlModal"
		size="xl"
		title="Extra large modal example"
	/>
</template>