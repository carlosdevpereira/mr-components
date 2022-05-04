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
import gsap from 'gsap'
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
						gsap.to(modalEl, {
							translateY: '-=12px',
							translateX: '+=12px'
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

						gsap.to(modalEl, {
							translateY: '+=12px',
							translateX: '-=12px'
						})
					}
				})
			}
		},

		animateModalRender(el, done) {
			gsap.from(el, {
				opacity: 0
			})

			const modalEl = el.querySelector('.mr-modal')
			const isMobile = window.innerWidth < 968

			if (!isMobile) {
				gsap.from(modalEl, {
					translateY: -50,
					onComplete: () => done(),
				})
			} else {
				gsap.from(modalEl, {
					bottom: '-20%',
					onComplete: () => done(),
				})
			}
		},

		animateModalLeave(el, done) {
			const modalEl = el.querySelector('.mr-modal')
			const isMobile = window.innerWidth < 968

			const translationOut = !isMobile ? '-=130%' : '+=130%'
			gsap.to(modalEl, {
				opacity: 0,
				translateY: translationOut,
				onComplete: () => {
					gsap.to(el, {
						opacity: 0,
						onComplete: () => done(),
					})
				},
			})
		},

		toggleFullScreen() {
			const modalContainer = document.getElementById('modal-' + this.uniqueId)
			const modalEl = modalContainer.querySelector('.mr-modal')

			if (!this.isFullscreen) {
				gsap.to(modalContainer, {
					paddingTop: 0
				})

				gsap
					.to(modalEl, {
						width: '100%',
						height: '100%',
						maxWidth: '100%',
					})
					.duration(0.25)
			} else {
				gsap.to(modalContainer, {
					paddingTop: '5rem',
				})

				modalEl.style.removeProperty('width')
				modalEl.style.removeProperty('height')

				gsap.to(modalEl, {
					maxWidth: '95%',
				})

				modalEl.style.removeProperty('width')
				modalEl.style.removeProperty('height')
			}

			this.isFullscreen = !this.isFullscreen

		}
	}
}
</script>