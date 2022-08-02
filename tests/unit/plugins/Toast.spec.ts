import { Toast } from '../../../src/plugins/Toast'

describe('Toast Plugin', () => {
	afterEach(() => {
		Toast.notifications.pop()
	})

	it('throws when toast is created without a message', () => {
		try {
			expect(Toast.notify).toThrow()
			Toast.notify({ message: '' })
		} catch (error) {
			expect(String(error)).toContain('message is required')
		}
	})

	it('creates a simple toast', () => {
		Toast.notify({ title: 'title example', message: 'message example' })

		expect(Toast.notifications.length).toBe(1)
		expect(Toast.notifications[0].title).toBe('title example')
		expect(Toast.notifications[0].message).toBe('message example')
	})

	it('creates a closeable toast when closeable receives a null value', () => {
		Toast.notify({ title: 'title example', message: 'message example', closeable: true })

		expect(Toast.notifications.length).toBe(1)
		expect(Toast.notifications[0].title).toBe('title example')
		expect(Toast.notifications[0].message).toBe('message example')
		expect(Toast.notifications[0].closeable).toBe(true)
	})

	it('creates a closeable toast when closeable receives a positive value', () => {
		Toast.notify({ title: 'title example', message: 'message example', closeable: true })

		expect(Toast.notifications.length).toBe(1)
		expect(Toast.notifications[0].title).toBe('title example')
		expect(Toast.notifications[0].message).toBe('message example')
		expect(Toast.notifications[0].closeable).toBe(true)
	})

	it('creates a not closeable toast when closeable receives a negative value', () => {
		Toast.notify({ title: 'title example', message: 'message example', closeable: false })

		expect(Toast.notifications.length).toBe(1)
		expect(Toast.notifications[0].title).toBe('title example')
		expect(Toast.notifications[0].message).toBe('message example')
		expect(Toast.notifications[0].closeable).toBe(false)
	})

	it('creates a success toast', () => {
		Toast.success({ title: 'title example', message: 'message example' })

		expect(Toast.notifications.length).toBe(1)
		expect(Toast.notifications[0].title).toBe('title example')
		expect(Toast.notifications[0].message).toBe('message example')
		expect(Toast.notifications[0].type).toBe('success')
	})

	it('creates a warning toast', () => {
		Toast.warn({ title: 'title example', message: 'message example' })

		expect(Toast.notifications.length).toBe(1)
		expect(Toast.notifications[0].title).toBe('title example')
		expect(Toast.notifications[0].message).toBe('message example')
		expect(Toast.notifications[0].type).toBe('warning')
	})

	it('creates an alert toast', () => {
		Toast.alert({ title: 'title example', message: 'message example' })

		expect(Toast.notifications.length).toBe(1)
		expect(Toast.notifications[0].title).toBe('title example')
		expect(Toast.notifications[0].message).toBe('message example')
		expect(Toast.notifications[0].type).toBe('error')
	})

	it('creates an info toast', () => {
		Toast.info({ title: 'title example', message: 'message example' })

		expect(Toast.notifications.length).toBe(1)
		expect(Toast.notifications[0].title).toBe('title example')
		expect(Toast.notifications[0].message).toBe('message example')
		expect(Toast.notifications[0].type).toBe('info')
	})
})
