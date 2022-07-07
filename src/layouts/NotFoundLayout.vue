<template>
	<div class="mr-layout-404">
		<h1>
			404
		</h1>
		<h3 class="mr-layout-title">
			{{ title }}
		</h3>
		<p class="mr-layout-description">
			{{ description }}
		</p>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Oops! Something is missing!'
		},

		description: {
			type: String,
			default: 'We can\'t seem to find what you are looking for.'
		}
	}
}
</script>

<style lang="scss">
@use 'sass:color';

@import '../assets/scss/_variables.scss';

.mr-layout-404 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	text-align: center;
	background-color: $sectionBackgroundColor;

	h1 {
		padding: 0;
		margin: 0;
		font-size: 100px;
		font-weight: bold;
	}

	h3.mr-layout-title {
		padding: 0;
		margin: 0;
		font-size: 36px;
	}

	p.mr-layout-description {
		padding-top: 0.5rem;
		margin: 0;
		font-size: 16px;
	}

	@media screen and (max-width: 991px) {
		h3.mr-layout-title {
			font-size: 26px;
		}

		p.mr-layout-description {
			font-size: 14px;
		}
	}
}
</style>
