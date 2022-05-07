import axios from "axios";
import { HttpRequest } from '../../../src/api/api'
jest.mock("axios");

let storage: { [key: string]: any } = {}

const localStorageMock = {
    getItem: jest.fn((key) => {
        return storage[key] || null;
    }),
    setItem: jest.fn((key, value) => {
        storage[key] = String(value);
    }),
    removeItem: jest.fn((key) => {
        delete storage[key];
    }),
    clear: jest.fn(),
    length: 1,
    key: jest.fn()
};

global.localStorage = localStorageMock;

describe('Api Request Builder', () => {
    it('exports HttpRequest class', () => {
        expect(HttpRequest).not.toBeUndefined()
    })

    describe('HttpRequest', () => {
        let httpRequestInstance: HttpRequest

        it('instantiates a new instance of HttpRequest without auth_token', () => {
            httpRequestInstance = new HttpRequest()
            expect(httpRequestInstance).not.toBeUndefined()
            expect(typeof httpRequestInstance).toBe('object')
            expect(httpRequestInstance.headers.authorization).toBeUndefined()
        })

        it('instantiates a new instance of HttpRequest with auth_token', () => {
            global.localStorage.setItem('auth_token', 'mock_token')
            httpRequestInstance = new HttpRequest()

            expect(httpRequestInstance).not.toBeUndefined()
            expect(typeof httpRequestInstance).toBe('object')
            expect(httpRequestInstance.headers.authorization).toBe('mock_token')
        })

        it('when a token is not passed to setAuthorization', () => {
            httpRequestInstance = new HttpRequest()

            try {
                expect(httpRequestInstance.setAuthorization).toThrow()
                httpRequestInstance.setAuthorization('')
            } catch (error) {
                expect(String(error)).toContain('token')
                expect(String(error)).toContain('required')
            }
        })

        describe('when building a Retrieve request', () => {
            let request: HttpRequest

            beforeEach(() => {
                httpRequestInstance = new HttpRequest()
                request = httpRequestInstance.retrieve('/example-url')
            })

            it('sets the correct value for request type', () => {
                expect(httpRequestInstance.type).toBe('retrieve')
            })

            it('sets the correct url for the request to call', () => {
                expect(httpRequestInstance.url).toBe('/example-url')
            })

            it('sets the correct HTTP request method', () => {
                expect(httpRequestInstance.method).toBe('get')
            })

            it('returns an instance of HttpRequest for building the rest of the request', () => {
                expect(request).not.toBeUndefined()
                expect(request.url).toBe('/example-url')
            })

            describe('when building result pagination', () => {
                it('throws error when setPage does not receive a valid page', () => {
                    try {
                        expect(request.setPage).toThrow()
                        request.setPage(-1)
                    } catch (error) {
                        expect(error).toContain('Page')
                        expect(error).toContain('required')
                    }
                })

                it('sets the pagination page', () => {
                    request.setPage(2)
                    expect(request.pagination.page).toBe(2)
                })

                it('throws error when setLimit does not receive a valid limit', () => {
                    try {
                        expect(request.setLimit).toThrow()
                        request.setLimit(-1)
                    } catch (error) {
                        expect(error).toContain('Limit')
                        expect(error).toContain('required')
                    }
                })

                it('sets the pagination limit', () => {
                    request.setLimit(5)
                    expect(request.pagination.limit).toBe(5)
                })
            })

            describe('when building result sorting', () => {
                it('throws error when setOrderBy does not receive a valid field', () => {
                    try {
                        expect(request.setOrderBy).toThrow()
                        request.setOrderBy('', 'asc')
                    } catch (error) {
                        expect(String(error)).toContain('Field')
                        expect(String(error)).toContain('required')
                    }
                })

                it('sets the sorting details correctly', () => {
                    request.setOrderBy('field_name', 'asc')
                    expect(request.sortBy.field).toBe('field_name')
                    expect(request.sortBy.direction).toBe('asc')
                })
            })

            describe('when building result fields', () => {
                it('throws error when setFields does not receive a valid array of fields', () => {
                    try {
                        expect(request.setFields).toThrow()
                        request.setFields([])
                    } catch (error) {
                        expect(String(error)).toContain('Fields')
                        expect(String(error)).toContain('must have at least one')
                    }
                })

                it('sets the fields array correctly', () => {
                    request.setFields(['f1', 'f2'])

                    expect(request.fields.length).toBe(2)
                    expect(request.fields[0]).toBe('f1')
                    expect(request.fields[1]).toBe('f2')
                })
            })

            describe('when building result relationships', () => {
                it('throws error when setRelationships does not receive a valid array of relations', () => {
                    try {
                        expect(request.setRelationships).toThrow()
                        request.setRelationships([])
                    } catch (error) {
                        expect(String(error)).toContain('Relationships')
                        expect(String(error)).toContain('must have at least one')
                    }
                })

                it('sets the relationships array correctly', () => {
                    request.setRelationships(['f1', 'f2'])

                    expect(request.relationships.length).toBe(2)
                    expect(request.relationships[0]).toBe('f1')
                    expect(request.relationships[1]).toBe('f2')
                })
            })

            describe('applying conditionals', () => {
                beforeEach(() => {
                    httpRequestInstance = new HttpRequest()
                    request = httpRequestInstance.retrieve('/example-url')
                })



                it('creates a "where" condition', () => {
                    request.where('f1', 'f1_value')

                    expect(httpRequestInstance.conditions.length).toBe(1)
                    expect(httpRequestInstance.conditions[0].field).toBe('f1')
                    expect(httpRequestInstance.conditions[0].clause).toBe('eq')
                    expect(httpRequestInstance.conditions[0].value).toBe('f1_value')
                })

                it('throws error when where does not receive a valid field name', () => {
                    try {
                        expect(request.where).toThrow()
                        request.where('', 'f1_value')
                    } catch (error) {
                        expect(String(error)).toContain('Field')
                        expect(String(error)).toContain('required')
                    }
                })

                it('creates a "where not" condition', () => {
                    request.whereNot('f1', 'f1_value')

                    expect(httpRequestInstance.conditions.length).toBe(1)
                    expect(httpRequestInstance.conditions[0].field).toBe('f1')
                    expect(httpRequestInstance.conditions[0].clause).toBe('df')
                    expect(httpRequestInstance.conditions[0].value).toBe('f1_value')
                })

                it('throws error when whereNot does not receive a valid field name', () => {
                    try {
                        expect(request.whereNot).toThrow()
                        request.whereNot('', 'f1_value')
                    } catch (error) {
                        expect(String(error)).toContain('Field')
                        expect(String(error)).toContain('required')
                    }
                })

                it('creates a "where higher" condition', () => {
                    request.whereHigher('f1', 10)

                    expect(httpRequestInstance.conditions.length).toBe(1)
                    expect(httpRequestInstance.conditions[0].field).toBe('f1')
                    expect(httpRequestInstance.conditions[0].clause).toBe('ut')
                    expect(httpRequestInstance.conditions[0].value).toBe(10)
                })

                it('throws error when whereHigher does not receive a valid field name', () => {
                    try {
                        expect(request.whereHigher).toThrow()
                        request.whereHigher('', null)
                    } catch (error) {
                        expect(String(error)).toContain('Field')
                        expect(String(error)).toContain('required')
                    }
                })

                it('creates a "where lower" condition', () => {
                    request.whereLower('f1', 10)

                    expect(httpRequestInstance.conditions.length).toBe(1)
                    expect(httpRequestInstance.conditions[0].field).toBe('f1')
                    expect(httpRequestInstance.conditions[0].clause).toBe('lt')
                    expect(httpRequestInstance.conditions[0].value).toBe(10)
                })

                it('throws error when whereLower does not receive a valid field name', () => {
                    try {
                        expect(request.whereLower).toThrow()
                        request.whereLower('', null)
                    } catch (error) {
                        expect(String(error)).toContain('Field')
                        expect(String(error)).toContain('required')
                    }
                })

                it('creates a "where higher or equal" condition', () => {
                    request.whereHigherOrEqual('f1', 10)

                    expect(httpRequestInstance.conditions.length).toBe(1)
                    expect(httpRequestInstance.conditions[0].field).toBe('f1')
                    expect(httpRequestInstance.conditions[0].clause).toBe('uet')
                    expect(httpRequestInstance.conditions[0].value).toBe(10)
                })

                it('throws error when whereHigherOrEqual does not receive a valid field name', () => {
                    try {
                        expect(request.whereHigherOrEqual).toThrow()
                        request.whereHigherOrEqual('', null)
                    } catch (error) {
                        expect(String(error)).toContain('Field')
                        expect(String(error)).toContain('required')
                    }
                })

                it('creates a "where lower or equal" condition', () => {
                    request.whereLowerOrEqual('f1', 10)

                    expect(httpRequestInstance.conditions.length).toBe(1)
                    expect(httpRequestInstance.conditions[0].field).toBe('f1')
                    expect(httpRequestInstance.conditions[0].clause).toBe('let')
                    expect(httpRequestInstance.conditions[0].value).toBe(10)
                })

                it('throws error when whereLowerOrEqual does not receive a valid field name', () => {
                    try {
                        expect(request.whereLowerOrEqual).toThrow()
                        request.whereLowerOrEqual('', null)
                    } catch (error) {
                        expect(String(error)).toContain('Field')
                        expect(String(error)).toContain('required')
                    }
                })

                it('creates a "where contains" condition (case sensitive)', () => {
                    request.whereContains('f1', "value", true)

                    expect(httpRequestInstance.conditions.length).toBe(1)
                    expect(httpRequestInstance.conditions[0].field).toBe('f1')
                    expect(httpRequestInstance.conditions[0].clause).toBe('contains')
                    expect(httpRequestInstance.conditions[0].value).toBe("value")
                })

                it('throws error when whereContains does not receive a valid field name', () => {
                    try {
                        expect(request.whereContains).toThrow()
                        request.whereContains('', null, true)
                    } catch (error) {
                        expect(String(error)).toContain('Field')
                        expect(String(error)).toContain('required')
                    }
                })

                it('creates a "where contains" condition (case insensitive)', () => {
                    request.whereContains('f1', "value", false)

                    expect(httpRequestInstance.conditions.length).toBe(1)
                    expect(httpRequestInstance.conditions[0].field).toBe('f1')
                    expect(httpRequestInstance.conditions[0].clause).toBe('icontains')
                    expect(httpRequestInstance.conditions[0].value).toBe("value")
                })

                it('throws error when whereContains (case insensitive) does not receive a valid field name', () => {
                    try {
                        expect(request.whereContains).toThrow()
                        request.whereContains('', null, false)
                    } catch (error) {
                        expect(String(error)).toContain('Field')
                        expect(String(error)).toContain('required')
                    }
                })

                it('creates a "where starts with" condition (case sensitive)', () => {
                    request.whereStartsWith('f1', "value", true)

                    expect(httpRequestInstance.conditions.length).toBe(1)
                    expect(httpRequestInstance.conditions[0].field).toBe('f1')
                    expect(httpRequestInstance.conditions[0].clause).toBe('starts')
                    expect(httpRequestInstance.conditions[0].value).toBe("value")
                })

                it('throws error when whereStartsWith does not receive a valid field name', () => {
                    try {
                        expect(request.whereStartsWith).toThrow()
                        request.whereStartsWith('', null, true)
                    } catch (error) {
                        expect(String(error)).toContain('Field')
                        expect(String(error)).toContain('required')
                    }
                })

                it('creates a "where starts with" condition (case insensitive)', () => {
                    request.whereStartsWith('f1', "value", false)

                    expect(httpRequestInstance.conditions.length).toBe(1)
                    expect(httpRequestInstance.conditions[0].field).toBe('f1')
                    expect(httpRequestInstance.conditions[0].clause).toBe('istarts')
                    expect(httpRequestInstance.conditions[0].value).toBe("value")
                })

                it('creates a "where ends with" condition (case sensitive)', () => {
                    request.whereEndsWith('f1', "value", true)

                    expect(httpRequestInstance.conditions.length).toBe(1)
                    expect(httpRequestInstance.conditions[0].field).toBe('f1')
                    expect(httpRequestInstance.conditions[0].clause).toBe('ends')
                    expect(httpRequestInstance.conditions[0].value).toBe("value")
                })

                it('throws error when whereEndsWith does not receive a valid field name', () => {
                    try {
                        expect(request.whereEndsWith).toThrow()
                        request.whereEndsWith('', null, true)
                    } catch (error) {
                        expect(String(error)).toContain('Field')
                        expect(String(error)).toContain('required')
                    }
                })

                it('creates a "where ends with" condition (case insensitive)', () => {
                    request.whereEndsWith('f1', "value", false)

                    expect(httpRequestInstance.conditions.length).toBe(1)
                    expect(httpRequestInstance.conditions[0].field).toBe('f1')
                    expect(httpRequestInstance.conditions[0].clause).toBe('iends')
                    expect(httpRequestInstance.conditions[0].value).toBe("value")
                })

            })
        })

        describe('when building a Find request', () => {
            let request: HttpRequest

            beforeEach(() => {
                httpRequestInstance = new HttpRequest()
                request = httpRequestInstance.find('/example-url')
            })

            it('sets the correct value for request type', () => {
                expect(httpRequestInstance.type).toBe('find')
            })

            it('sets the correct url for the request to call', () => {
                expect(httpRequestInstance.url).toBe('/example-url')
            })

            it('sets the correct HTTP request method', () => {
                expect(httpRequestInstance.method).toBe('get')
            })

            it('returns an instance of HttpRequest for building the rest of the request', () => {
                expect(request).not.toBeUndefined()
                expect(request.url).toBe('/example-url')
            })
        })

        describe('when building a Create request', () => {
            let request: HttpRequest

            beforeEach(() => {
                httpRequestInstance = new HttpRequest()
                request = httpRequestInstance.create('/example-url', 'test-payload')
            })

            it('sets the correct value for request data', () => {
                expect(httpRequestInstance.data).toBe('test-payload')
            })

            it('sets the correct url for the request to call', () => {
                expect(httpRequestInstance.url).toBe('/example-url')
            })

            it('sets the correct HTTP request method', () => {
                expect(httpRequestInstance.method).toBe('post')
            })

            it('returns an instance of HttpRequest for building the rest of the request', () => {
                expect(request).not.toBeUndefined()
                expect(request.url).toBe('/example-url')
            })
        })

        describe('when building an Update request', () => {
            let request: HttpRequest

            beforeEach(() => {
                httpRequestInstance = new HttpRequest()
                request = httpRequestInstance.update('/example-url', 'test-payload')
            })

            it('sets the correct value for request data', () => {
                expect(httpRequestInstance.data).toBe('test-payload')
            })

            it('sets the correct url for the request to call', () => {
                expect(httpRequestInstance.url).toBe('/example-url')
            })

            it('sets the correct HTTP request method', () => {
                expect(httpRequestInstance.method).toBe('put')
            })

            it('returns an instance of HttpRequest for building the rest of the request', () => {
                expect(request).not.toBeUndefined()
                expect(request.url).toBe('/example-url')
            })
        })

        describe('when building a Delete request', () => {
            let request: HttpRequest

            beforeEach(() => {
                httpRequestInstance = new HttpRequest()
                request = httpRequestInstance.delete('/example-url')
            })

            it('sets the correct url for the request to call', () => {
                expect(httpRequestInstance.url).toBe('/example-url')
            })

            it('sets the correct HTTP request method', () => {
                expect(httpRequestInstance.method).toBe('delete')
            })

            it('returns an instance of HttpRequest for building the rest of the request', () => {
                expect(request).not.toBeUndefined()
                expect(request.url).toBe('/example-url')
            })
        })

        describe('when sending the request', () => {
            let request: HttpRequest

            beforeEach(() => {
                httpRequestInstance = new HttpRequest()
            })

            it('sends a simple retrieve request', async () => {
                request = httpRequestInstance.retrieve('/example-url')
                await request.send()

                expect(axios.request).toHaveBeenCalledWith({
                    url: '/example-url?[page]=1&[limit]=10',
                    method: 'get',
                    data: {},
                    headers: {
                        authorization: "mock_token"
                    }
                })
            })

            it('sends a retrieve request with custom pagination', async () => {
                request = httpRequestInstance.retrieve('/example-url')
                await request.setPage(2).setLimit(5).send()

                expect(axios.request).toHaveBeenCalledWith({
                    url: '/example-url?[page]=2&[limit]=5',
                    method: 'get',
                    data: {},
                    headers: {
                        authorization: "mock_token"
                    }
                })
            })

            it('sends a retrieve request with custom order', async () => {
                request = httpRequestInstance.retrieve('/example-url')
                await request.setOrderBy('field', 'desc').send()

                expect(axios.request).toHaveBeenCalledWith({
                    url: '/example-url?[page]=1&[limit]=10&[order_by]=field desc',
                    method: 'get',
                    data: {},
                    headers: {
                        authorization: "mock_token"
                    }
                })
            })

            it('sends a retrieve request with custom conditions', async () => {
                request = httpRequestInstance.retrieve('/example-url')
                await request.where('field', 'value').send()

                expect(axios.request).toHaveBeenCalledWith({
                    url: '/example-url?[page]=1&[limit]=10&field[eq]=value',
                    method: 'get',
                    data: {},
                    headers: {
                        authorization: "mock_token"
                    }
                })
            })

            it('sends a retrieve request with custom fields', async () => {
                request = httpRequestInstance.retrieve('/example-url')
                await request.setFields(['f1', 'f2']).send()

                expect(axios.request).toHaveBeenCalledWith({
                    url: '/example-url?[page]=1&[limit]=10&[fields]=f1,f2',
                    method: 'get',
                    data: {},
                    headers: {
                        authorization: "mock_token"
                    }
                })
            })

            it('sends a find request with custom fields', async () => {
                request = httpRequestInstance.find('/example-url')
                await request.setFields(['f1', 'f2']).send()

                expect(axios.request).toHaveBeenCalledWith({
                    url: '/example-url?[fields]=f1,f2',
                    method: 'get',
                    data: {},
                    headers: {
                        authorization: "mock_token"
                    }
                })
            })

            it('sends a retrieve request with custom relationships', async () => {
                request = httpRequestInstance.retrieve('/example-url')
                await request.setRelationships(['relation1', 'relation2']).send()

                expect(axios.request).toHaveBeenCalledWith({
                    url: '/example-url?[page]=1&[limit]=10&[relations]=relation1,relation2',
                    method: 'get',
                    data: {},
                    headers: {
                        authorization: "mock_token"
                    }
                })
            })

            it('sends a find request with custom relationships', async () => {
                request = httpRequestInstance.find('/example-url')
                await request.setRelationships(['relation1', 'relation2']).send()

                expect(axios.request).toHaveBeenCalledWith({
                    url: '/example-url?[relations]=relation1,relation2',
                    method: 'get',
                    data: {},
                    headers: {
                        authorization: "mock_token"
                    }
                })
            })
        })
    })
})
