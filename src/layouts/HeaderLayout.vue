<template>
	<div
		class="mr-header-layout"
		:class="containerClasses"
	>
		<Transition
			appear
			:css="false"
			mode="out-in"
			@enter="onHeaderEnter"
		>
			<header class="mr-header">
				<slot name="header" />
			</header>
		</Transition>

		<main class="mr-layout-main">
			<slot />
		</main>
	</div>
</template>

<script>
import gsap from "gsap"

export default {
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

	methods: {
		onHeaderEnter(el, done) {
			gsap.to('.mr-layout-main', {
				opacity: 0,
				duration: 0,
				translateY: '-10px',
			})

			gsap.from(el, {
				opacity: 0,
				translateY: '-100px',
				duration: 0.7,
				onComplete: () => {
					done()

					gsap.to('.mr-layout-main', {
						opacity: 1,
						duration: 0.8,
						translateY: 0
					})
				}
			})
		}
	}
}
</script>

<style lang="scss">
@use 'sass:color';

@import '../assets/scss/_variables.scss';

.mr-header-layout {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: $sectionBackgroundColor;

	.mr-header {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		width: 100%;
		height: 70px;
		padding: 0 1.5rem;
		background-color: $whiteColor;
	}

	.mr-layout-main {
		flex: 1;
		padding: 1.2rem 1.5rem;
	}

	&.fixed-header {
		display: flex;
		flex-direction: column;
		overflow: hidden;

		.mr-header {
			z-index: 50;
		}

		.mr-layout-main {
			overflow: auto;
		}
	}
}
</style>