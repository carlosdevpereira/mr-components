<template>
	<SidebarLayout
		class="mr-sidebar-with-header-layout"
		:class="containerClasses"
	>
		<template #sidebar>
			<slot name="sidebar" />
		</template>

		<HeaderLayout :fixed-header="fixedHeader || undefined">
			<template #header>
				<slot name="header" />
			</template>

			<slot />
		</HeaderLayout>
	</SidebarLayout>
</template>

<script>
import SidebarLayout from './SidebarLayout.vue'
import HeaderLayout from './HeaderLayout.vue'

export default {
	components: {
		SidebarLayout,
		HeaderLayout
	},

	props: {
		fixedHeader: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		containerClasses() {
			let classes = []

			if(this.fixedHeader) {
				classes.push('fixed-header')
			}

			return classes.join(' ')
		}
	},
}
</script>

<style lang="scss">
@use 'sass:color';
@use 'sass:map';

@import '../assets/scss/_variables.scss';

.mr-sidebar-with-header-layout {
	& > .mr-layout-main {
		padding: 0;
	}

	.mr-header-layout {
		position: unset;

		&:not(.fixed-header) {
			overflow: unset;

			.mr-layout-main {
				padding: 6rem 1.5rem 1.5rem;
			}
		}

		&.fixed-header {
			.mr-header {
				position: sticky;
			}

			.mr-layout-main {
				padding: 1.5rem;
			}
		}

		.mr-header {
			position: absolute;
			top: 0;
			left: 0;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			width: 100%;
			height: 70px;
			padding: 0 1.5rem;
			background-color: $whiteColor;
		}
	}

	@media screen and (max-width: #{map.get($breakpoints, 'md')}px) {
		&:not(.fixed-header) {
			display: block;
			overflow: auto;
		}

		&.fixed-header {
			&:not(.sidebar-is-open) {
				.mr-sidebar-toggle {
					position: absolute;
					top: 1.28rem;
				}
			}

			& > .mr-layout-main {
				padding: 0;

				.mr-header-layout {
					.mr-header {
						padding: 0 2rem 0 4rem;
						font-weight: bold;
						background-color: $whiteColor;
					}

					.mr-layout-main {
						padding: 1.5rem;
					}
				}
			}
		}

		& > .mr-layout-main {
			padding: 4rem 1.5rem;
			overflow: auto;

			.mr-header-layout {
				.mr-header {
					position: relative;
					padding: 0;
					background-color: transparent;

					&:empty {
						height: 20px;
					}
				}

				.mr-layout-main {
					padding: 0;
				}
			}
		}
	}
}

</style>
