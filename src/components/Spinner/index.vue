<template>
	<div class="mr-spinner">
		<div
			v-for="i in 2"
			:key="i"
			class="mr-spinner-item"
			:class="`mr-spinner-item-${i}`"
		/>
	</div>
</template>

<style lang="scss" src="./index.scss" />