import { create, test, enforce, omitWhen } from '../plugins/Validation'

export const validate = create(data => {
	test('name', 'Name is required', () => {
		enforce(data.name).isNotBlank()
	})

	omitWhen(
		() => !data.name,
		() => {
			test('name', 'Name must be at least 3 characters long', () => {
				enforce(data.name).longerThan(3)
			})
		}
	)

	test('email', 'Email is required', () => {
		enforce(data.email).isNotBlank()
	})

	omitWhen(
		() => !data.email,
		() => {
			test('email', 'Invalid email address', () => {
				enforce(data.email).isEmail()
			})
		}
	)

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
