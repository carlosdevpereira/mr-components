<template>
	<Split-Layout class="mr-layout-maintenance">
		<template #right>
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
		</template>
	</Split-Layout>
</template>

<script>
import Button from '@/components/Button/index.vue'
import SplitLayout from '@/layouts/SplitLayout.vue'

export default {
	components: {
		Button,
		SplitLayout
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
@use 'sass:map';

@import '../assets/scss/_variables.scss';

.mr-layout-maintenance {
	.mr-layout-left-section {
		width: 45%;
	}

	.mr-layout-right-section {
		justify-content: center;
		width: 55%;

		.mr-layout-title {
			max-width: 450px;
			font-size: 72px;
			font-weight: bold;
		}

		.mr-layout-notice {
			margin-top: 2rem;
		}
	}

	@media screen and (max-width: #{map.get($breakpoints, 'xl')}px) {
		.mr-layout-right-section .mr-layout-title {
			font-size: 55px;
		}
	}

	@media screen and (max-width: #{map.get($breakpoints, 'lg')}px) {
		.mr-layout-left-section {
			width: 0;
			padding: 0;
		}

		.mr-layout-right-section {
			align-items: center;
			width: 100%;
			text-align: center;
		}
	}
}
</style>