<template>
	<Split-Layout class="mr-layout-password-recovery">
		<template #right>
			<Transition
				appear
				:css="false"
				mode="out-in"
				@enter="onEnter"
				@leave="onLeave"
			>
				<div
					v-if="instructionsSent === false"
					class="mr-layout-content"
				>
					<h1 class="mr-layout-title">
						{{ title }}
					</h1>

					<p class="mr-layout-description">
						{{ description }}
					</p>

					<form class="mr-layout-form">
						<Input
							v-model="recoverPasswordForm.email"
							placeholder="Email Address"
							type="email"
							autocomplete="email"
							:errors="errors.email"
						/>

						<div class="mr-layout-form-actions">
							<Button
								icon="send-plane-line"
								label="Send instructions"
								class="recover-password-button"
								:loading="recoveryInProgress"
								@click="onRecoverPassword"
							/>

							<Button
								label="Did you remember your password? Sign in now"
								class="remembered-password"
								theme="text-solid"
								@click="onSignIn"
							/>
						</div>
					</form>
				</div>

				<div
					v-else
					class="instructions-sent"
				>
					<Icon name="mail-check-fill" />

					<h1 class="mr-layout-title">
						Check your email
					</h1>

					<p class="mr-layout-description">
						We've sent you an email with the instructions for resetting your password.
					</p>

					<small class="try-another-email">
						Did not receive our email? Check your spam filter, or

						<Button
							theme="text"
							variant="secondary"
							label="try another email address"
							@click="onTryAgain"
						/>
					</small>
				</div>
			</Transition>
		</template>
	</Split-Layout>
</template>

<script>
import { validate } from '../validators/PasswordRecoveryValidator'
import gsap from 'gsap'
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
			default: 'Forgot your password?'
		},

		description: {
			type: String,
			default: 'That\'s okay, it happens! To recover your password, please enter the email address of your account below and we\'ll send you further instructions there.'
		},

		recoverPassword: {
			type: Function,
			required: true
		}
	},

	emits: ['click:go-to-sign-in'],

	data() {
		return {
			errors: {},
			recoverPasswordForm: {
				email: ''
			},

			recoveryInProgress: false,
			instructionsSent: false,
		}
	},

	methods: {
		async onRecoverPassword() {
			this.recoveryInProgress = true

			let validation = validate(this.recoverPasswordForm)
			this.errors = {
				email: validation.getErrors('email'),
			}

			if (!validation.hasErrors()) {
				await this.recoverPassword(this.recoverPasswordForm.email)
				this.instructionsSent = true
			}

			this.recoveryInProgress = false
		},

		onTryAgain() {
			this.recoverPasswordForm.email = ''
			this.errors = {}
			this.instructionsSent = false
		},

		onSignIn() {
			this.$emit('click:go-to-sign-in')
		},

		onEnter(el, done) {
			let targets = el.children.length > 0 ? el.children : el

			gsap.from(targets, {
				opacity: 0,
				translateY: 150,
				stagger: 0.5,
				onComplete: () => done()
			})
		},

		onLeave(el, done) {
			gsap.to(el, {
				opacity: 0,
				translateY: -150,
				height: 0,
				padding: 0,
				onComplete: () => done()
			})
		}
	}
}
</script>

<style lang="scss">
@use 'sass:color';
@use 'sass:map';

@import '../assets/scss/_variables.scss';

.mr-layout-password-recovery {
	$maxWidth: 450px;

	.mr-layout-left-section {
		width: 45%;
	}

	.mr-layout-right-section {
		justify-content: center;
		width: 55%;

		.mr-layout-content {
			width: $maxWidth;
			max-width: 95%;
			margin: 0 auto;
		}

		.mr-layout-title {
			margin-bottom: 16px;
			font-size: 36px;
			font-weight: bold;
		}

		.mr-layout-form {
			width: $maxWidth;
			max-width: 95%;
			margin: 0 auto;
			margin-top: 2rem;

			.mr-layout-form-actions {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin-top: 16px;
				text-align: center;

				.mr-button {
					width: 100%;
				}

				.remembered-password {
					margin-top: 8px;
				}
			}
		}

		.instructions-sent {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;

			.mr-icon {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100px;
				height: 95px;
				font-size: 52px;
				color: darken(map.get($variants, 'success'), 5%);
				background-color: fade-out(map.get($variants, 'success'), 0.9);
				border-radius: 12px;
			}

			.mr-layout-title {
				margin-top: 16px;
			}

			.mr-layout-description {
				max-width: 350px;
				margin-bottom: 68px;
			}

			.try-another-email {
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
		}
	}

	@media screen and (max-width: #{map.get($breakpoints, 'lg')}px) {
		position: relative;
		flex-direction: column;
		overflow: auto;

		.mr-layout-left-section:not(:empty) {
			position: absolute;
			top: 100%;
			order: 2;
			width: 100%;
			height: 100%;
		}

		.mr-layout-left-section:empty {
			width: 0;
			padding: 0;
		}

		.mr-layout-right-section {
			align-items: center;
			order: 1;
			width: 100%;
			height: 100vh;
			text-align: center;
		}

		.mr-layout-form-actions {
			margin-top: 16px;
		}
	}
}
</style>
