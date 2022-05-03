<template>
	<Teleport to="body">
		<Transition
			appear
			:css="false"
			mode="out-in"
			@enter="animateModalRender"
			@leave="animateModalLeave"
		>
			<div
				v-if="isOpen"
				:id="`modal-${uniqueId}`"
				class="mr-modal-container"
				:class="classes"
			>
				<div
					class="mr-modal-backdrop"
					@click="close"
				/>

				<div class="mr-modal">
					<header class="mr-modal-header">
						<div class="mr-modal-header-title">
							{{ title }}
						</div>

						<Button
							v-if="maximizable"
							class="fullscreen-toggle"
							theme="text"
							size="sm"
							:icon="fullscreenToggleIcon"
							@click="toggleFullScreen"
						/>

						<Button
							theme="text"
							size="sm"
							icon="close-line"
							@click="close"
						/>
					</header>

					<section class="mr-modal-content">
						<slot />
					</section>

					<footer
						v-if="$slots['footer']"
						class="mr-modal-footer"
					>
						<slot name="footer" />
					</footer>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script>
import './index.scss'
import anime from 'animejs'
import Button from '../Button/index.vue'

export const sizes = ['sm', 'md', 'lg', 'xl']

export default {
	name: 'Modal',

	components: {
		Button
	},

	props: {
		title : {
			type: String,
			default: ''
		},

		size: {
			type: String,
			default: 'md',
			validator: v => sizes.includes(v),
		},

		maximizable: {
			type: Boolean,
			default: false
		},
	},

	emits: ['update:is-open'],

	data() {
		return {
			isOpen: false,
			isFullscreen: false,
			uniqueId: Math.floor(Math.random() * Date.now()),
		}
	},

	computed: {
		classes() {
			let classes = []

			if (this.isFullscreen) classes.push('fullscreen')
			classes.push(`size-${this.size}`)

			return classes.join(' ')
		},

		fullscreenToggleIcon() {
			return this.isFullscreen ? 'picture-in-picture-2-line' : 'fullscreen-line'
		}
	},

	methods: {
		open() {
			if (this.isOpen === false) {
				this.isOpen = true
				this.$emit('update:is-open', true)

				// block body scrolling
				document.querySelector('body').style.overflow = 'hidden'

				const openModals = document.querySelectorAll('.mr-modal-container')
				openModals.forEach((modalContainer) => {
					if (modalContainer.id !== this.$el.id) {
						const modalEl = modalContainer.querySelector('.mr-modal')

						anime({
							targets: modalEl,
							translateY: {
								value: '-=12px',
								duration: 500
							},
							translateX: {
								value: '+=12px',
								duration: 500
							},
							easing: 'easeInOutQuad',
							duration: 800,
						})
					}
				})
			}
		},

		close(){
			if (this.isOpen) {
				this.isOpen = false
				this.$emit('update:is-open', false)

				// unblock body scroll
				document.querySelector('body').style.removeProperty('overflow')
				this.isFullscreen = false

				const openModals = document.querySelectorAll('.mr-modal-container')
				openModals.forEach((modalContainer) => {
					if (modalContainer.id !== this.$el.id) {
						const modalEl = modalContainer.querySelector('.mr-modal')

						anime({
							targets: modalEl,
							translateY: {
								value: '+=12px',
								duration: 500,
							},
							translateX: {
								value: '-=12px',
								duration: 500
							},
							easing: 'easeInOutQuad',
							duration: 800,
						})
					}
				})
			}
		},

		animateModalRender(el, done) {
			anime({
				targets: el,
				opacity: [0, 1],
			})

			const modalEl = el.querySelector('.mr-modal')
			const isMobile = window.innerWidth < 968

			if (!isMobile) {
				anime({
					targets: modalEl,
					translateY: [-50, 0],
					easing: 'easeInOutSine',
					duration: 500,
					changeComplete: () => done()
				})
			} else {
				anime({
					targets: modalEl,
					bottom: ['-20%', 0],
					easing: 'easeInOutSine',
					duration: 700,
					changeComplete: () => done()
				})
			}

		},

		animateModalLeave(el, done) {
			const modalEl = el.querySelector('.mr-modal')
			const isMobile = window.innerWidth < 968

			const translationOut = !isMobile ? '-=130%' : '+=130%'
			anime({
				targets: modalEl,
				opacity: [1, 0],
				duration: 500,
				translateY: {
					value: translationOut,
					duration: 400
				},
				easing: 'easeInOutSine',
				changeComplete: () => {
					anime({
						targets: el,
						opacity: [1, 0],
						duration: 300,
						changeComplete: () => done()
					})
				}
			})
		},

		toggleFullScreen() {
			const modalContainer = document.getElementById('modal-' + this.uniqueId)
			const modalEl = modalContainer.querySelector('.mr-modal')

			if (!this.isFullscreen) {
				anime({
					targets: modalContainer,
					paddingTop: '0',
					easing: 'easeInOutSine',
					duration: 500,
				})

				anime({
					targets: modalEl,
					width: '100%',
					height: '100%',
					maxWidth: '100%',
					easing: 'easeInOutSine',
					duration: 350,
				})
			} else {
				anime({
					targets: modalContainer,
					paddingTop: '5rem',
					easing: 'easeInOutSine',
					duration: 500,
				})

				modalEl.style.removeProperty('width')
				modalEl.style.removeProperty('height')

				anime({
					targets: modalEl,
					maxWidth: '95%',
					width: 'inherit',
					height: 'inherit',
					easing: 'easeInOutSine',
					duration: 500,
				})
			}

			this.isFullscreen = !this.isFullscreen

		}
	}
}
</script>