<template>
	<Split-Layout
		class="mr-layout-login"
		inverse
	>
		<template #left>
			<Transition
				appear
				:css="false"
				mode="out-in"
				@enter="onEnter"
				@leave="onLeave"
			>
				<div class="mr-layout-content">
					<header class="mr-layout-header">
						<h2 class="mr-layout-title">
							Welcome back
						</h2>

						<small>
							Welcome back! Please enter your credentials.
						</small>
					</header>

					<form class="mr-layout-form">
						<Input
							v-model="loginForm.email"
							type="email"
							label="Email"
							autocomplete="email"
							:errors="errors.email"
						/>

						<Input
							v-model="loginForm.password"
							label="Password"
							type="password"
							autocomplete="new-password"
							:errors="errors.password"
						/>

						<div class="password-remember-or-recover">
							<Checkbox
								v-model="loginForm.rememberMe"
								label="Remember me for 30 days"
							/>
						</div>

						<div class="mr-layout-form-actions">
							<Button
								class="sign-in-button"
								label="Sign In"
								@click="onSignIn"
							/>

							<slot name="custom-login-actions" />

							<Button
								theme="text"
								class="!w-fit ml-auto mr-auto"
								size="sm"
								label="Forgot password?"
								@click="onForgotPassword"
							/>

							<small class="dont-have-an-account">
								Don't have an account?
								<Button
									label="Sign up for free"
									size="sm"
									theme="text"
									variant="secondary"
									@click="onSignUpRequest"
								/>
							</small>


						</div>
					</form>
				</div>
			</Transition>
		</template>
	</Split-Layout>
</template>

<script>
import { validate } from '../validators/LoginValidator'
import SplitLayout from "./SplitLayout.vue"
import Input from '@/components/Input/index.vue'
import Checkbox from '@/components/Checkbox/index.vue'
import gsap from 'gsap'

export default {
	components: {
		SplitLayout,
		Input,
		Checkbox
	},

	emits: ['sign-in', 'sign-up', 'forgot-password'],

	data() {
		return {
			errors: {},
			loginForm: {
				email: '',
				password: '',
				rememberMe: false,
			},
		}
	},

	methods: {
		onForgotPassword() {
			this.$emit('forgot-password')
		},

		onSignIn() {
			let validation = validate(this.loginForm)
			this.errors = {
				email: validation.getErrors('email'),
				password: validation.getErrors('password'),
			}

			if (!validation.hasErrors()) {
				this.$emit('sign-in', {
					email: this.loginForm.email,
					password: this.loginForm.password,
					rememberMe: this.loginForm.rememberMe
				})
			}
		},

		onSignUpRequest() {
			this.$emit('sign-up')
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

.mr-layout-login {
	box-sizing: border-box;

	.mr-layout-content {
		padding-bottom: 2rem;
		margin: 0 auto;
	}

	.mr-layout-left-section {
		justify-content: center;
	}

	.mr-layout-header {
		margin-bottom: 8px;

		.mr-layout-title {
			margin-bottom: 0 !important;
			border: none;
		}
	}

	.mr-layout-form {
		padding: 24px 0;

		.mr-input-container {
			margin-bottom: 12px;
		}
	}

	.password-remember-or-recover {
		display: flex;
		justify-content: space-between;
		margin-bottom: 24px;
	}

	.mr-layout-form-actions {
		.mr-button {
			width: 100%;
			margin-bottom: 12px;
		}

		.dont-have-an-account {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 18px;
			font-size: 12px;
			font-weight: 400;

			.mr-button {
				width: max-content;
				padding-left: 4px;
				margin: 0;
				font-size: 13px;
			}
		}
	}

	@media screen and (max-width: #{map.get($breakpoints, 'lg')}px) {
		position: relative;
		flex-direction: column;
		justify-content: flex-start;
		overflow: auto;

		.mr-layout-left-section {
			width: 100%;
			height: 100%;
		}

		.mr-layout-right-section:not(:empty) {
			position: absolute;
			top: 100%;
			width: 100%;
			height: 100%;
		}

		.mr-layout-right-section:empty {
			width: 0;
			padding: 0;
		}
	}

	@media screen and (max-width: #{map.get($breakpoints, 'sm')}px) {
		.password-remember-or-recover {
			flex-direction: column;
			margin-bottom: 12px;

			.mr-button {
				margin-top: 12px;
			}
		}
	}
}

</style>
