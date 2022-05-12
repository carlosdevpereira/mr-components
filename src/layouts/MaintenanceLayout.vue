<template>
	<div class="mr-layout-maintenance">
		<div class="mr-layout-main">
			<h1 class="mr-layout-title">
				{{ title }}
			</h1>

			<p class="mr-layout-description">
				{{ description }}
			</p>

			<div class="mr-layout-notice">
				<Button
					v-if="contactAddress"
					theme="outlined"
					label="Something urgent to discuss?"
					size="lg"
					@click="mailToContactAddress"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Button from '@/components/Button/index.vue'

export default {
	components: {
		Button
	},

	props: {
		title: {
			type: String,
			default: 'Maintenance mode.'
		},

		description: {
			type: String,
			default: 'We\'re making our services even better. Be right back.'
		},

		contactAddress: {
			type: String,
			default: null
		}
	},

	methods: {
		mailToContactAddress() {
			window.open(`mailto:${this.contactAddress}`);
		}
	}
}
</script>

<style lang="scss">
@use 'sass:color';

@import '../assets/scss/_variables.scss';

.mr-layout-maintenance {
	display: flex;
	justify-content: flex-end;
	width: 100%;
	height: 100%;
	background-color: $sectionBackgroundColor;

	.mr-layout-main {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 55%;
		padding: 2rem;
		background-color: $whiteColor;

		.mr-layout-title {
			max-width: 450px;
			font-size: 72px;
			font-weight: bold;
		}

		.mr-layout-notice {
			margin-top: 2rem;
		}
	}
}
</style>