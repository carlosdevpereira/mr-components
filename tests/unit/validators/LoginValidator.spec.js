import { validate } from '@/validators/LoginValidator'

describe('Login Validator', () => {
	describe('Email address', () => {
		it('validates that a email address was filled in', () => {
			const validation = validate({})

			expect(validation.tests.email.valid).toBe(false)
			expect(validation.tests.email.errors[0]).toBe('Email is required')
		})

		it('returns an error when email is invalid', () => {
			const validation = validate({ email: 'invalid_email_test' })

			expect(validation.tests.email.valid).toBe(false)
			expect(validation.tests.email.errors[0]).toBe('Invalid email address')
		})

		it('succeeds when email is valid', () => {
			const validation = validate({ email: 'test@example.org' })

			expect(validation.tests.email.valid).toBe(true)
		})
	})

	describe('Password', () => {
		it('validates that the password was filled in', () => {
			const validation = validate({})

			expect(validation.tests.password.valid).toBe(false)
			expect(validation.tests.password.errors[0]).toBe('Password is required')
		})

		it('returns an error when password is invalid', () => {
			const validation = validate({ password: '1234' })

			expect(validation.tests.password.valid).toBe(false)
			expect(validation.tests.password.errors[0]).toBe(
				'Password must have 6 characters or more'
			)
		})

		it('succeeds when password is valid', () => {
			const validation = validate({ password: '123456' })

			expect(validation.tests.password.valid).toBe(true)
		})
	})
})
