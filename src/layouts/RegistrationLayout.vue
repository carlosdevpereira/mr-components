<template>
	<Split-Layout class="mr-layout-registration">
		<template #right>
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
							Let's get you started.
						</h2>

						<small>
							Create your free account by filling the fields below.
						</small>
					</header>

					<form class="mr-layout-form">
						<Input
							v-model="registrationForm.name"
							label="Name"
							:errors="errors.name"
							autocomplete="given-name"
						/>

						<Input
							v-model="registrationForm.email"
							label="Email"
							type="email"
							autocomplete="email"
							:errors="errors.email"
						/>

						<Input
							v-model="registrationForm.password"
							type="password"
							label="Password"
							autocomplete="new-password"
							:errors="errors.password"
						/>

						<Input
							v-model="registrationForm.passwordConfirmation"
							type="password"
							label="Password Confirmation"
							autocomplete="new-password"
							:errors="errors.passwordConfirmation"
						/>

						<div class="mr-layout-form-actions">
							<Button
								label="Sign Up"
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
				</div>
			</Transition>
		</template>
	</Split-Layout>
</template>

<script>
import { validate } from '../validators/RegistrationValidator'
import SplitLayout from "./SplitLayout.vue"
import Input from '@/components/Input/index.vue'
import gsap from 'gsap'

export default {
	components: {
		SplitLayout,
		Input,
	},

	emits: ['sign-in', 'sign-up', 'forgot-password'],

	data() {
		return {
			errors: {},
			registrationForm: {
				name: '',
				email: '',
				password: '',
				passwordConfirmation: '',
			}
		}
	},

	methods: {
		onSignUp() {
			let validation = validate(this.registrationForm)
			this.errors = {
				name: validation.getErrors('name'),
				email: validation.getErrors('email'),
				password: validation.getErrors('password'),
				passwordConfirmation: validation.getErrors('passwordConfirmation'),
			}

			if (!validation.hasErrors()) {
				this.$emit('sign-up', {
					name: this.registrationForm.name,
					email: this.registrationForm.email,
					password: this.registrationForm.password,
					passwordConfirmation: this.registrationForm.passwordConfirmation
				})
			}
		},

		onSignIn() {
			this.$emit('sign-in')
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

.mr-layout-registration {
	box-sizing: border-box;

	.mr-layout-content {
		padding-bottom: 2rem;
		margin: 0 auto;
	}

	.mr-layout-left-section {
		width: 55%;
	}

	.mr-layout-right-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 45%;
		overflow: auto;
	}

	.mr-layout-header {
		margin-bottom: 8px;

		.mr-layout-title {
			margin-bottom: 0 !important;
			border: none;
		}
	}

	.mr-layout-form {
		padding: 24px 0 0;

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

		.mr-layout-right-section {
			width: 100%;
			height: 100%;
		}

		.mr-layout-left-section:not(:empty) {
			position: absolute;
			top: 100%;
			width: 100%;
			height: 100%;
		}

		.mr-layout-left-section:empty {
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
