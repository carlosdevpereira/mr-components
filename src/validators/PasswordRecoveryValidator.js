import { create, test, enforce, omitWhen } from '../plugins/Validation'

export const validate = create(data => {
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
})
