import axios from 'axios'

/**
 * HTTP Request Builder
 *
 * @author carlosdevpereira
 * @description Handles the logic of building an HTTP Request to retrieve, find, create, update or delete values from the back-end
 */
class HttpRequest {
    /**
     * Defines what type of request
     * will be performed for get requests (retrieve or find)
     *
     * @private
     * @type {String}
     */
    type = ''

    /**
     * What HTTP method to use when
     * performing the HTTP request
     *
     * @private
     * @type {String}
     */
    method = ''

    /**
     * What URL to call when performing
     * the HTTP request
     *
     * @private
     * @type {String}
     */
    url = ''

    /**
     * Headers to send with the
     * HTTP request
     *
     * @private
     * @type {Object}
     */
    headers = {}

    /**
     * Defines the pagination details to
     * send in the retrieve request
     *
     * @private
     * @type {Object}
     * @property {Number} page -> The page to retrieve results from
     * @property {Number} limit -> Amount of results per page
     */
    pagination = {
        page: 1,
        limit: 10,
    }

    /**
     * Defines the order of the
     * results that back-end needs to return
     *
     * @private
     * @type {Object}
     * @property {String} field -> The field where to apply the order
     * @property {String} direction -> Direction of the sort (asc | desc)
     */
    sortBy = {
        field: '',
        direction: 'asc',
    }

    /**
     * Defines the list of fields
     * that the back-end must return in the response
     *
     * @private
     * @type {Array<String>}
     */
    fields = []

    /**
     * Defines the list of relationships
     * that the back-end must return in the response
     *
     * @private
     * @type {Array<String>}
     */
    relationships = []

    /**
     * Defines the where clauses to send
     * to the back-end to filter the response results
     *
     * @private
     * @type {Array<Object>}
     * @property {String} field -> Name of the field where to apply the condition
     * @property {String} clause -> What conditional clause to apply
     * @property {Any} value -> Value to look for when applying the condition
     */
    conditions = []

    /**
     * Defines the request body
     * to send when creating or updating items
     *
     * @private
     * @type {Object}
     */
    data = {}

    /**
     * Creates a new instance
     * of `HttpRequest`
     */
    constructor() {
        const token = localStorage.getItem('auth_token')
        if (token) this.headers.authorization = token
    }

    // ============ Retrieve ============

    /**
     * Starts building a GET HTTP request to
     * instruct the back-end to retrieve a list of items
     *
     * @param {String} Url Url to call when performing the HTTP Request
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    retrieve(url) {
        this.type = 'retrieve'
        this.url = url
        this.method = 'get'

        return this
    }

    /**
     * Defines the pagination page
     * to retrieve values from
     *
     * @param {Number} page
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    setPage(page) {
        if (!page) throw new Error('Page is a required parameter for setPage')

        this.pagination.page = page

        return this
    }

    /**
     * Defines the amount of rows
     * per page to retrieve
     *
     * @param {Number} limit
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    setLimit(limit) {
        if (!limit) throw new Error('Limit is a required parameter for setLimit')

        this.pagination.limit = limit

        return this
    }

    /**
     * Defines the order parameters
     * to send in the retrieve request
     *
     * @param {String} field
     * @param {String} direction
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    setOrderBy(field, direction = 'asc') {
        if (!field) throw new Error('Field is a required parameter for setOrderBy')

        this.sortBy.field = field
        this.sortBy.direction = direction

        return this
    }

    /**
     * Defines the fields to
     * retrieve from the back-end objects
     *
     * @param {Array<String>} fields
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    setFields(fields = []) {
        if (!fields || fields.length === 0)
            throw new Error('Fields array is a required parameter for setFields and must have at least one item')

        this.fields = fields

        return this
    }

    /**
     * Defines the relationships to
     * retrieve inside the back-end objects
     *
     * @param {Array<String>} relationships
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    setRelationships(relationships = []) {
        if (!relationships || relationships.length === 0)
            throw new Error(
                'Relationships array is a required parameter for setRelationships and must have at least one item'
            )

        this.relationships = relationships

        return this
    }

    /**
     * Defines a clause to filter results
     * where the value from `fieldName` field
     * equals to the value from `value` parameter
     *
     * @param {String} fieldName Name of the field to apply the condition
     * @param {Any} value Value to filter by
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    where(fieldName, value = null) {
        if (!fieldName) throw new Error('Field name is a required parameter for where clause')

        this.conditions.push({
            field: fieldName,
            clause: 'eq',
            value,
        })

        return this
    }

    /**
     * Defines a clause to filter results
     * where the value from `fieldName` field
     * is not equal to the value from `value` parameter
     *
     * @param {String} fieldName Name of the field to apply the condition
     * @param {Any} value Value to filter by
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    whereNot(fieldName, value = null) {
        if (!fieldName) throw new Error('Field name is a required parameter for whereNot clause')

        this.conditions.push({
            field: fieldName,
            clause: 'df',
            value,
        })

        return this
    }

    /**
     * Defines a clause to filter results
     * where the value from `fieldName` field
     * is higher than the value from `value` parameter
     *
     * @param {String} fieldName Name of the field to apply the condition
     * @param {Any} value Value to filter by
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    whereHigher(fieldName, value) {
        if (!fieldName) throw new Error('Field name is a required parameter for whereHigher clause')

        this.conditions.push({
            field: fieldName,
            clause: 'ut',
            value,
        })

        return this
    }

    /**
     * Defines a clause to filter results
     * where the value from `fieldName` field
     * is lower than the value from `value` parameter
     *
     * @param {String} fieldName Name of the field to apply the condition
     * @param {Any} value Value to filter by
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    whereLower(fieldName, value) {
        if (!fieldName) throw new Error('Field name is a required parameter for whereLower clause')

        this.conditions.push({
            field: fieldName,
            clause: 'lt',
            value,
        })

        return this
    }

    /**
     * Defines a clause to filter results
     * where the value from `fieldName` field
     * is higher or equal to the value from `value` parameter
     *
     * @param {String} fieldName Name of the field to apply the condition
     * @param {Any} value Value to filter by
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    whereHigherOrEqual(fieldName, value) {
        if (!fieldName) throw new Error('Field name is a required parameter for whereHigherOrEqual clause')

        this.conditions.push({
            field: fieldName,
            clause: 'uet',
            value,
        })

        return this
    }

    /**
     * Defines a clause to filter results
     * where the value from `fieldName` field
     * is lower or equal to the value from `value` parameter
     *
     * @param {String} fieldName Name of the field to apply the condition
     * @param {Any} value Value to filter by
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    whereLowerOrEqual(fieldName, value) {
        if (!fieldName) throw new Error('Field name is a required parameter for whereLowerOrEqual clause')

        this.conditions.push({
            field: fieldName,
            clause: 'let',
            value,
        })

        return this
    }

    /**
     * Defines a clause to filter results
     * where the value from `fieldName` field
     * contains the value from `value` parameter
     *
     * @param {String} fieldName Name of the field to apply the condition
     * @param {Any} value Value to filter by
     * @param {Boolean} caseSensitive Defines if the filter to apply should or should not be case sensitive
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    whereContains(fieldName, value, caseSensitive = true) {
        if (!fieldName) throw new Error('Field name is a required parameter for whereContains clause')

        this.conditions.push({
            field: fieldName,
            clause: caseSensitive ? 'contains' : 'icontains',
            value,
        })

        return this
    }

    /**
     * Defines a clause to filter results
     * where the value from `fieldName` field
     * starts with the value from `value` parameter
     *
     * @param {String} fieldName Name of the field to apply the condition
     * @param {Any} value Value to filter by
     * @param {Boolean} caseSensitive Defines if the filter to apply should or should not be case sensitive
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    whereStartsWith(fieldName, value, caseSensitive = true) {
        if (!fieldName) throw new Error('Field name is a required parameter for whereStartsWith clause')

        this.conditions.push({
            field: fieldName,
            clause: caseSensitive ? 'starts' : 'istarts',
            value,
        })

        return this
    }

    /**
     * Defines a clause to filter results
     * where the value from `fieldName` field
     * ends with the value from `value` parameter
     *
     * @param {String} fieldName Name of the field to apply the condition
     * @param {Any} value Value to filter by
     * @param {Boolean} caseSensitive Defines if the filter to apply should or should not be case sensitive
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    whereEndsWith(fieldName, value, caseSensitive = true) {
        if (!fieldName) throw new Error('Field name is a required parameter for whereEndsWith clause')

        this.conditions.push({
            field: fieldName,
            clause: caseSensitive ? 'ends' : 'iends',
            value,
        })

        return this
    }

    // ============ Find ============

    /**
     * Starts building a GET HTTP request to
     * instruct the back-end to find a specific item
     *
     * @param {String} Url Url to call when performing the HTTP Request
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    find(url) {
        this.type = 'find'
        this.url = url
        this.method = 'get'

        return this
    }

    /**
     * Starts building a POST HTTP request to
     * instruct the back-end to find a specific item
     *
     * @param {String} url Url to call when performing the HTTP Request
     * @param {Object} payload Object with data to be created (saved) by the back-end
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    create(url, payload) {
        this.url = url
        this.data = payload
        this.method = 'post'

        return this
    }

    /**
     * Starts building a PUT HTTP request to
     * instruct the back-end to update a specific item
     *
     * @param {String} url Url to call when performing the HTTP Request
     * @param {Object} payload Object with data to be updated (saved) by the back-end
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    update(url, payload) {
        this.url = url
        this.data = payload
        this.method = 'put'

        return this
    }

    /**
     * Starts building a DELETE HTTP request to
     * instruct the back-end to delete a specific item
     *
     * @param {String} url Url to call when performing the HTTP Request
     * @param {Object} payload Object with data to be updated (saved) by the back-end
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    delete(url) {
        this.url = url
        this.method = 'delete'

        return this
    }

    /**
     * Defines the Authorization header
     * with the value provided by the `value` parameter
     *
     * @param {String} token Authorization token
     * @return {HttpRequest} Instance of `HttpRequest` class
     */
    setAuthorization(token) {
        if (!token) throw new Error('Authorization token is a required parameter for setAuthorization')

        this.headers.authorization = token

        return this
    }

    /**
     * Performs the HTTP Request
     * returning the back-end response
     *
     * @returns {Promise<any>} Axios Response
     */
    send() {
        let url = this.url

        if (this.method === 'get' && this.type === 'retrieve') {
            url += `?[page]=${this.pagination.page}&[limit]=${this.pagination.limit}`

            if (this.sortBy.field) url += `&[order_by]=${this.sortBy.field} ${this.sortBy.direction}`
            if (this.conditions.length) {
                this.conditions.forEach((condition) => {
                    url += `&${condition.field}[${condition.clause}]=${condition.value}`
                })
            }
        }

        if (this.method === 'get') {
            if (this.fields.length) {
                url += url === this.url ? '?' : '&'
                url += `[fields]=${this.fields.join(',')}`
            }

            if (this.relationships.length) {
                url += url === this.url ? '?' : '&'
                url += `[relations]=${this.relationships.join(',')}`
            }
        }

        return axios.request({
            url: url,
            method: this.method,
            data: this.data,
            headers: this.headers,
        })
    }
}

export default HttpRequest
export { HttpRequest }
