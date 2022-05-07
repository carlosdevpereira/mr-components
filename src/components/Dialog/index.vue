<template>
	<Teleport
		v-if="dialogs.length || animationInProgress"
		to="body"
	>
		<div class="mr-dialog-container">
			<div
				class="mr-dialog-backdrop"
				@click="destroy"
			/>

			<transition-group
				appear
				:css="false"
				mode="out-in"
				@enter="animateRender"
				@leave="animateLeave"
			>
				<div
					v-for="dialog in dialogs"
					:id="`mr-dialog-${dialog.id}`"
					:key="dialog.id"
					class="mr-dialog"
					:class="variant(dialog)"
				>
					<div class="mr-dialog-content">
						<Icon
							class="mr-dialog-icon"
							:name="icon(dialog)"
						/>

						<section class="mr-dialog-body">
							<strong class="mr-dialog-title">
								{{ dialog.title }}
							</strong>

							<p class="mr-dialog-message">
								{{ dialog.message }}
							</p>

							<slot v-if="$slots['default']" />
						</section>
					</div>

					<footer class="mr-dialog-footer">
						<Button
							theme="outlined"
							variant="secondary"
							:label="dialog.cancelButtonLabel"
							@click="onClickCancel(dialog)"
						/>

						<Button
							:label="dialog.confirmButtonLabel"
							:variant="dialog.type"
							@click="onClickConfirm(dialog)"
						/>
					</footer>
				</div>
			</transition-group>
		</div>
	</Teleport>
</template>

<script>
import './index.scss'
import gsap from 'gsap'
import Icon from '../Icon/index.vue'
import Button from '../Button/index.vue'
import { Dialog } from '../../plugins/Dialog'

export default {
	name: 'Dialog',

	components: {
		Icon,
		Button
	},

	emits: ['update:is-open'],

	data() {
		return {
			animationInProgress: false
		}
	},

	computed: {
		dialogs() {
			return Dialog.dialogs
		}
	},

	methods: {
		variant(dialog) {
			return 'variant-' + dialog.type
		},

		icon(dialog) {
			if (dialog.icon) return dialog.icon

			if (dialog.type === 'success') {
				return 'check-line'
			} else if (dialog.type === 'warning') {
				return 'error-warning-line'
			} else if (dialog.type === 'danger') {
				return 'alarm-warning-line'
			}

			return 'information-line'
		},

		onClickCancel(dialog) {
			if (dialog.onCancel) dialog.onCancel()

			this.destroy()
		},

		onClickConfirm(dialog) {
			if (dialog.onConfirm) dialog.onConfirm()

			this.destroy()
		},

		destroy() {
			this.animationInProgress = true

			if (this.dialogs.length > 0) {
				Dialog.dialogs.splice(0, 1)
			}
		},

		animateRender(el, done) {
			let mobileTransitions = {}

			const isMobile = window.innerWidth < 968
			if (isMobile) {
				mobileTransitions.translateY = 100
			}

			gsap.from(el, {
				opacity: 0,
				scale: .2,
				duration: .2,
				...mobileTransitions,
				onComplete: () => {
					done()

					this.animationInProgress = false
				},
			})
		},

		animateLeave(el, done) {
			let mobileTransitions = {}

			const isMobile = window.innerWidth < 968
			if (isMobile) {
				mobileTransitions.translateY = 100
			}

			gsap.to(el, {
				opacity: 0,
				scale: .2,
				duration: .2,
				...mobileTransitions,
				onComplete: () => {
					done()

					this.animationInProgress = false
				},
			})
		}
	}
}
</script>