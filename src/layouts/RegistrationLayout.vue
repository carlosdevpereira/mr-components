<template>
	<Split-Layout class="mr-layout-registration">
		<template #right>
			<header class="mr-layout-header">
				<h2 class="mr-layout-title">
					Let's get you started.
				</h2>

				<small>
					Create your free account by filling the fields below.
				</small>
			</header>

			<form class="mr-layout-form">
				<Input
					v-model="name"
					label="Name"
				/>

				<Input
					v-model="email"
					label="Email"
				/>

				<Input
					v-model="password"
					label="Password"
				/>

				<Input
					v-model="passwordConfirmation"
					label="Password Confirmation"
				/>

				<div class="mr-layout-form-actions">
					<Button
						label="Sign In"
						@click="onSignUp"
					/>

					<slot name="custom-registration-actions" />

					<small class="already-have-an-account">
						Already have an account?
						<Button
							label="Sign in now"
							size="sm"
							theme="text"
							variant="secondary"
							@click="onSignIn"
						/>
					</small>
				</div>
			</form>
		</template>
	</Split-Layout>
</template>

<script>
// @TODO: Form validations for name, email, password and confirmation
import SplitLayout from "./SplitLayout.vue"
import Input from '@/components/Input/index.vue'

export default {
	components: {
		SplitLayout,
		Input,
	},

	emits: ['sign-in', 'sign-up', 'forgot-password'],

	data() {
		return {
			name: '',
			email: '',
			password: '',
			passwordConfirmation: '',
		}
	},

	methods: {
		onSignUp() {
			this.$emit('sign-up', {
				name: this.name,
				email: this.email,
				password: this.password,
				passwordConfirmation: this.passwordConfirmation
			})
		},

		onSignIn() {
			this.$emit('sign-in')
		}
	}
}
</script>

<style lang="scss">
@use 'sass:color';
@use 'sass:map';

@import '../assets/scss/_variables.scss';

.mr-layout-registration {
	.mr-layout-right-section {
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

	.mr-layout-form-actions {
		margin-top: 24px;

		.mr-button {
			width: 100%;
			margin-bottom: 12px;
		}

		.already-have-an-account {
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
		.mr-layout-right-section {
			width: 100%;
		}

		.mr-layout-left-section {
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