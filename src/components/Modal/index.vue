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
			uniqueId: Math.floor(Math.random() * Date.now())
		}
	},

	computed: {
		classes() {
			return `size-${this.size}`
		}
	},

	methods: {
		open() {
			this.isOpen = true
			this.$emit('update:is-open', true)

			const openModals = document.querySelectorAll('.mr-modal-container')

			openModals.forEach((modalContainer) => {
				if (modalContainer.id !== this.$el.id) {
					const modalEl = modalContainer.querySelector('.mr-modal')

					anime({
						targets: modalEl,
						translateY: {
							value: '-=7px',
							duration: 500
						},
						translateX: {
							value: '+=8px',
							duration: 500
						},
						skew: {
							value: '-4deg',
							duration: 100,
							easing: 'easeInOutSine'
						},
						easing: 'easeInOutQuad',
						duration: 800,
					})
				}
			})
		},

		close(){
			this.isOpen = false
			this.$emit('update:is-open', false)

			const openModals = document.querySelectorAll('.mr-modal-container')

			openModals.forEach((modalContainer) => {
				if (modalContainer.id !== this.$el.id) {
					const modalEl = modalContainer.querySelector('.mr-modal')

					anime({
						targets: modalEl,
						translateY: {
							value: '+=7px',
							duration: 500,
						},
						translateX: {
							value: '-=8px',
							duration: 500
						},
						skew: {
							value: '0deg',
							duration: 100,
							easing: 'easeInOutSine'
						},
						easing: 'easeInOutQuad',
						duration: 800,
					})
				}
			})
		},

		animateModalRender(el, done) {
			anime({
				targets: el,
				opacity: [0, 1],
			})

			const modalEl = el.querySelector('.mr-modal')

			anime({
				targets: modalEl,
				translateY: [-50, 0],
				easing: 'easeInOutQuad',
				duration: 800,
				changeComplete: () => done()
			})
		},

		animateModalLeave(el, done) {
			const modalEl = el.querySelector('.mr-modal')
			anime({
				targets: modalEl,
				opacity: [1, 0],
				duration: 500,
				translateY: {
					value: '-=130%',
					duration: 500
				},
				easing: 'easeInOutSine',
				changeComplete: () => {
					anime({
						targets: el,
						opacity: [1, 0],
						duration: 500,
						changeComplete: () => done()
					})
				}
			})

		}
	}
}
</script>