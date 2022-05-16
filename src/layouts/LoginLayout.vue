<template>
	<Split-Layout
		class="mr-layout-login"
		inverse
	>
		<template #left>
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
						label="Email"
						:errors="errors.email"
					/>

					<Input
						v-model="loginForm.password"
						label="Password"
						type="password"
						:errors="errors.password"
					/>

					<div class="password-remember-or-recover">
						<Checkbox
							v-model="loginForm.rememberMe"
							label="Remember me for 30 days"
						/>

						<Button
							theme="text"
							size="sm"
							label="Forgot password"
							@click="onForgotPassword"
						/>
					</div>

					<div class="mr-layout-form-actions">
						<Button
							label="Sign In"
							@click="onSignIn"
						/>

						<slot name="custom-login-actions" />

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
		</template>
	</Split-Layout>
</template>

<script>
import { validate } from '../validators/LoginValidator'
import SplitLayout from "./SplitLayout.vue"
import Input from '@/components/Input/index.vue'
import Checkbox from '@/components/Checkbox/index.vue'

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
			font-size: 12px;
			font-weight: 300;

			.mr-button {
				width: max-content;
				padding-left: 4px;
				margin: 0;
				font-size: 13px;
			}
		}
	}

	@media screen and (max-width: #{map.get($breakpoints, 'lg')}px) {
		.mr-layout-left-section {
			width: 100%;
		}

		.mr-layout-right-section {
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