<template>
	<div
		class="mr-sidebar-layout"
		:class="{'sidebar-is-open': hasSidebar || animationInProgress}"
	>
		<Transition
			v-if="hasSidebar || animationInProgress"
			appear
			:css="false"
			mode="out-in"
			@enter="onSidebarEnter"
			@leave="onSidebarLeave"
		>
			<aside
				v-if="hasSidebar"
				class="mr-sidebar"
			>
				<slot name="sidebar" />
			</aside>
		</Transition>

		<Button
			class="mr-sidebar-toggle"
			theme="text"
			:icon="isOpen ? 'close-fill' : 'menu-2-line'"
			:class="{'active': isOpen || animationInProgress}"
			@click="toggleSidebar"
		/>

		<main class="mr-layout-main">
			<slot />
		</main>
	</div>
</template>

<script>
import gsap from 'gsap'
import Button from '../components/Button/index.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'

export default {
	components: {
		Button,
	},

	setup() {
		let refWindowWidth = ref(window.innerWidth)

		const onWidthChange = () => refWindowWidth.value = window.innerWidth
		onMounted(() => window.addEventListener('resize', onWidthChange))
		onUnmounted(() => window.removeEventListener('resize', onWidthChange))

		const windowWidth = computed(() => refWindowWidth.value)

		return {
			windowWidth
		}
	},

	data() {
		return {
			isOpen: false,
			animationInProgress: false
		}
	},

	computed: {
		hasSidebar() {
			return this.isOpen || this.windowWidth >= 968
		},

		customTransitions() {
			const isMobile = this.windowWidth < 968
			const transitions = {}
			if (isMobile) transitions.translateY = '100%'
			else transitions.translateX = '-100%'

			return transitions
		}
	},

	watch: {
		windowWidth(width) {
			if (width < 968) {
				if (this.hasSidebar || this.animationInProgress) {
					document.querySelector('body').style.overflow = 'hidden'
				}
			} else {
				document.querySelector('body').style.removeProperty('overflow')
			}
		}
	},

	methods: {
		toggleSidebar() {
			this.animationInProgress = true
			this.isOpen = !this.isOpen

			if (this.windowWidth < 968) {
				if (this.hasSidebar || this.animationInProgress) {
					document.querySelector('body').style.overflow = 'hidden'
				}
			}
		},

		onSidebarEnter(el, done) {
			gsap.to('.mr-layout-main', {
				opacity: 0,
				duration: 0,
				translateY: '-10px',
			})

			gsap.fromTo(
				'.mr-sidebar-toggle',
				{ opacity: 0, },
				{ opacity: 1, delay: 0.15 }
			)

			gsap.from(el, {
				opacity: 0,
				duration: 0.4,
				...this.customTransitions,
			})

			gsap.fromTo('.mr-sidebar, .mr-sidebar > *', {
				opacity: 0,
				translateY: '-10px',
				duration: 0.3,
			}, {
				opacity: 1,
				translateY: 0,
				duration: 0.3,
				stagger: 0.15,
				onComplete: () => {
					done()

					gsap.to('.mr-layout-main', {
						opacity: 1,
						duration: 0.8,
						translateY: 0
					})

					this.animationInProgress = false
				}
			})
		},

		onSidebarLeave(el, done) {
			gsap.to('.mr-sidebar-toggle', {
				opacity: 0,
				translateY: '-10px',
			})

			gsap.fromTo('.mr-sidebar, .mr-sidebar > *', {
				opacity: 1,
				translateY: 0,
				duration: 0.3,
			},{
				opacity: 0,
				translateY: '-10px',
				duration: 0.3,
				stagger: -0.15,
				onComplete: () => {
					gsap.to(el, {
						opacity: 0,
						duration: 0.4,
						...this.customTransitions,
						onComplete: () => {
							done()

							this.animationInProgress = false

							gsap.fromTo(
								'.mr-sidebar-toggle',
								{ opacity: 0, translateY: '-10px' },
								{ opacity: 1, translateY: 0 }
							)

							document.querySelector('body').style.removeProperty('overflow')
						}
					})
				}
			})

		},
	}
}

</script>

<style lang="scss">
@use 'sass:color';
@use 'sass:map';

@import '../assets/scss/_variables.scss';

.mr-sidebar-layout {
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: $sectionBackgroundColor;

	.mr-sidebar {
		box-sizing: border-box;
		width: 245px;
		height: 100%;
		padding: 24px 16px;
		overflow: auto;
		background-color: $whiteColor;
	}

	.mr-layout-main {
		position: relative;
		flex: 1;
		padding: 1.2rem 1.5rem;
		overflow: auto;
	}

	.mr-sidebar-toggle {
		position: sticky;
		top: 12px;
		right: 12px;
		display: none;
		width: 32px;
		height: 32px;
		padding: 0;
		font-size: 18px;
		background-color: $sectionBackgroundColor;
		border-radius: 100%;
	}

	@media screen and (max-width: #{map.get($breakpoints, 'md')}px) {
		flex-direction: column;

		.mr-sidebar {
			position: fixed;
			top: 0;
			left: 0;
			display: none;
			width: 100%;
			max-width: 100%;
		}

		.mr-layout-main {
			padding: 3rem 1.5rem 1.5rem;
		}

		.mr-sidebar-toggle {
			position: sticky;
			top: 1.5rem;
			left: 1rem;
			z-index: 150;
			box-sizing: border-box;
			display: block;

			&.active {
				z-index: 250;
			}
		}

		&.sidebar-is-open {
			.mr-sidebar {
				z-index: 200;
				display: flex;
				flex-direction: column;
			}

			.mr-sidebar-toggle {
				position: fixed;
				top: 1.5rem;
				right: 1.5rem;
				left: auto;
			}
		}
	}
}
</style>