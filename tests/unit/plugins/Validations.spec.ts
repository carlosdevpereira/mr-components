import { Validation } from '../../../src/plugins/Validation'

describe('Validation Plugin', () => {
    it('has vest methods', () => {
        expect(Validation.test).not.toBeUndefined()
        expect(Validation.create).not.toBeUndefined()
        expect(Validation.each).not.toBeUndefined()
        expect(Validation.only).not.toBeUndefined()
        expect(Validation.skip).not.toBeUndefined()
        expect(Validation.warn).not.toBeUndefined()
        expect(Validation.group).not.toBeUndefined()
        expect(Validation.optional).not.toBeUndefined()
        expect(Validation.skipWhen).not.toBeUndefined()
        expect(Validation.omitWhen).not.toBeUndefined()
        expect(Validation.enforce).not.toBeUndefined()
        expect(Validation.context).not.toBeUndefined()
        expect(Validation.include).not.toBeUndefined()
        expect(Validation.eager).not.toBeUndefined()
    })
})