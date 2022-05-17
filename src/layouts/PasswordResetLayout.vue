<template>
	<Split-Layout class="mr-layout-password-reset">
		<template #right>
			<Transition
				appear
				:css="false"
				mode="out-in"
				@enter="onEnter"
				@leave="onLeave"
			>
				<div
					v-if="passwordReseted === false"
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
							v-model="resetPasswordForm.password"
							type="password"
							placeholder="New password"
							autocomplete="new-password"
							:errors="errors.password"
						/>

						<Input
							v-model="resetPasswordForm.passwordConfirmation"
							type="password"
							placeholder="New password confirmation"
							autocomplete="new-password"
							:errors="errors.passwordConfirmation"
						/>

						<div class="mr-layout-form-actions">
							<Button
								icon="quill-pen-fill"
								label="Set password"
								class="reset-password-button"
								:loading="resetInProgress"
								@click="onResetPassword"
							/>
						</div>
					</form>
				</div>

				<div
					v-else
					class="password-resetted"
				>
					<Icon name="lock-password-fill" />

					<h1 class="mr-layout-title">
						You are all set!
					</h1>

					<p class="mr-layout-description">
						You can now use your new password to log in to your account.
					</p>

					<Button
						theme="text-solid"
						variant="success"
						label="Log in to your account now"
						@click="onLogInNow"
					/>
				</div>
			</Transition>
		</template>
	</Split-Layout>
</template>

<script>
import { validate } from '../validators/PasswordResetValidator'
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
			default: 'Set your new password'
		},

		description: {
			type: String,
			default: 'You made it! As a last step, insert the new password for your account in the fields below.'
		},

		resetPassword: {
			type: Function,
			required: true
		}
	},

	emits: ['click:go-to-login'],

	data() {
		return {
			errors: {},
			resetPasswordForm: {
				password: '',
				passwordConfirmation: '',
			},

			resetInProgress: false,
			passwordReseted: false
		}
	},

	methods: {
		async onResetPassword() {
			this.resetInProgress = true

			let validation = validate(this.resetPasswordForm)
			this.errors = {
				password: validation.getErrors('password'),
				passwordConfirmation: validation.getErrors('password'),
			}

			if (!validation.hasErrors()) {
				await this.resetPassword(this.resetPasswordForm.password)
				this.passwordReseted = true
			}

			this.resetInProgress = false
		},

		onLogInNow() {
			this.$emit('click:go-to-login')
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

.mr-layout-password-reset {
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

			.mr-input-container {
				margin-bottom: 8px;
			}

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

		.password-resetted {
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

		.mr-layout-form-actions {
			margin-top: 16px;
		}
	}
}
</style>