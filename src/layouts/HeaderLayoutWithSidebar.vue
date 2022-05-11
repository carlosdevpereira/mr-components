<template>
	<HeaderLayout
		class="mr-header-with-sidebar-layout"
		:class="containerClasses"
		:fixed-header="fixedHeader || undefined"
	>
		<template #header>
			<slot name="header" />
		</template>

		<SidebarLayout>
			<template #sidebar>
				<slot name="sidebar" />
			</template>

			<slot />
		</SidebarLayout>
	</HeaderLayout>
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
		},

		fixedSidebar: {
			type: Boolean,
			default: false
		},

		sidebarFilled: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		containerClasses() {
			let classes = []

			if(this.fixedHeader) classes.push('fixed-header')
			if(this.fixedSidebar) classes.push('fixed-sidebar')
			if(this.sidebarFilled && this.fixedSidebar && this.fixedHeader) classes.push('sidebar-filled')

			return classes.join(' ')
		}
	},
}
</script>

<style lang="scss">
@use 'sass:color';
@use 'sass:map';

@import '../assets/scss/_variables.scss';

.mr-header-with-sidebar-layout {
	& > .mr-layout-main {
		padding: 0;
	}

	&:not(.sidebar-filled) {
		.mr-sidebar-layout {
			.mr-sidebar {
				background-color: transparent;
			}
		}
	}

	&.fixed-header:not(.fixed-sidebar) {
		display: block;
		overflow: auto;

		.mr-header {
			position: sticky;
			top: 0;
			z-index: 50;
		}
	}

	@media screen and (min-width: #{map.get($breakpoints, 'md')}px) {
		&.fixed-sidebar:not(.fixed-header) {
			& > .mr-header,
			& > .mr-layout-main,
			.mr-sidebar-layout {
				position: sticky;
				top: 0;
				overflow: unset;
			}

			.mr-sidebar-layout {
				.mr-sidebar {
					position: sticky;
					top: 0;
					overflow: auto;
				}
			}
		}
	}

	@media screen and (max-width: #{map.get($breakpoints, 'md')}px) {
		.mr-header {
			padding: 0 2rem 0 4rem;
			font-weight: bold;
		}

		.mr-sidebar-layout {
			.mr-sidebar {
				background-color: $whiteColor;
			}
		}

		&.fixed-header {
			display: flex;
			overflow: hidden;

			.mr-header:not(.fixed-sidebar) {
				z-index: 0;
			}

			.mr-layout-main {
				height: calc(100% - 70px);
				overflow: unset;

				.mr-sidebar-layout {
					.mr-sidebar-toggle {
						position: absolute;
						top: -50px;
					}

					.mr-layout-main {
						overflow: auto;
					}
				}
			}
		}

		.mr-sidebar-layout {
			height: 100%;
			overflow: unset;

			.mr-sidebar-toggle {
				position: absolute;
				top: -50px;
			}
		}
	}
}

</style>