<template>
	<div
		class="mr-split-layout"
		:class="{inverse: inverse}"
	>
		<div class="mr-layout-left-section">
			<slot name="left" />
		</div>

		<div class="mr-layout-right-section">
			<slot name="right" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		inverse: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

<style lang="scss">
@use 'sass:color';

@import '../assets/scss/_variables.scss';

.mr-split-layout {
	display: flex;
	justify-content: flex-end;
	width: 100%;
	height: 100%;
	background-color: $sectionBackgroundColor;

	.mr-layout-left-section {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 50%;
		padding: 2rem;
	}

	.mr-layout-right-section {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		width: 50%;
		padding: 2rem;
	}

	&:not(.inverse) {
		.mr-layout-right-section {
			background-color: $whiteColor;
		}
	}

	&.inverse {
		.mr-layout-left-section {
			background-color: $whiteColor;
		}
	}
}
</style>