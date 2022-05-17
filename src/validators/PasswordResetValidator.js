import { create, test, enforce, omitWhen } from '../plugins/Validation'

export const validate = create(data => {
	test('password', 'Password is required', () => {
		enforce(data.password).isNotBlank()
	})

	omitWhen(
		() => !data.password,
		() => {
			test('password', 'Password must have 6 characters or more', () => {
				enforce(data.password).longerThan(5)
			})
		}
	)

	test('passwordConfirmation', 'Password Confirmation is required', () => {
		enforce(data.passwordConfirmation).isNotBlank()
	})

	omitWhen(
		() => !data.passwordConfirmation,
		() => {
			test('passwordConfirmation', 'Passwords do not match', () => {
				enforce(data.passwordConfirmation).equals(data.password)
			})
		}
	)
})
