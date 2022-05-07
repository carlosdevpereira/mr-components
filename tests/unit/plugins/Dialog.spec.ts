import { Dialog } from '../../../src/plugins/Dialog'

describe('Dialog Plugin', () => {
    afterEach(() => {
        Dialog.dialogs.splice(0, 1)
    })

    it('throws when dialog is created without a title', () => {
        try {
            expect(Dialog.new).toThrow()
            Dialog.new({ title: '', message: '' })
        } catch (error) {
            expect(String(error)).toContain('title is required')
        }
    })

    it('throws when dialog is created without a message', () => {
        try {
            expect(Dialog.new).toThrow()
            Dialog.new({ title: 'title example', message: '' })
        } catch (error) {
            expect(String(error)).toContain('message is required')
        }
    })

    it('creates a simple dialog', () => {
        Dialog.new({ title: 'title example', message: 'message example' })

        expect(Dialog.dialogs.length).toBe(1)
        expect(Dialog.dialogs[0].title).toBe('title example')
        expect(Dialog.dialogs[0].message).toBe('message example')
    })

    it('creates a success dialog', () => {
        Dialog.success({ title: 'title example', message: 'message example' })

        expect(Dialog.dialogs.length).toBe(1)
        expect(Dialog.dialogs[0].title).toBe('title example')
        expect(Dialog.dialogs[0].message).toBe('message example')
        expect(Dialog.dialogs[0].type).toBe('success')
    })

    it('creates a warning dialog', () => {
        Dialog.warning({ title: 'title example', message: 'message example' })

        expect(Dialog.dialogs.length).toBe(1)
        expect(Dialog.dialogs[0].title).toBe('title example')
        expect(Dialog.dialogs[0].message).toBe('message example')
        expect(Dialog.dialogs[0].type).toBe('warning')
    })

    it('creates a danger dialog', () => {
        Dialog.danger({ title: 'title example', message: 'message example' })

        expect(Dialog.dialogs.length).toBe(1)
        expect(Dialog.dialogs[0].title).toBe('title example')
        expect(Dialog.dialogs[0].message).toBe('message example')
        expect(Dialog.dialogs[0].type).toBe('danger')
    })

    it('creates a info dialog', () => {
        Dialog.info({ title: 'title example', message: 'message example' })

        expect(Dialog.dialogs.length).toBe(1)
        expect(Dialog.dialogs[0].title).toBe('title example')
        expect(Dialog.dialogs[0].message).toBe('message example')
        expect(Dialog.dialogs[0].type).toBe('info')
    })
})