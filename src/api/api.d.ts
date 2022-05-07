import { AxiosResponse } from 'axios'

/**
 * Available request types used to 
 * differentiate between Get all or Find one requests
 */
declare enum RequestType {
    Retrieve = 'retrieve',
    Find = 'find'
}

/**
 * Describes how the request results should be
 * paginated by the server
 */
declare interface Pagination {
    page: number
    limit: number
}

/**
 * Describes how the request results should be
 * ordered by the server
 */
declare interface SortBy {
    field: string
    direction: SortDirections
}

/**
 * Available sorting directions
 */
declare enum SortDirections {
    Asc = 'asc',
    Desc = 'desc'
}

/**
 * Describes the conditions on how the 
 * request results should be ordered by the server
 */
declare interface Condition {
    field: String
    clause: String
    value: any
}

interface HeaderList {
    authorization?: String
}

/**
 * HTTP Request Builder
 *
 * @author carlosdevpereira
 * @description Handles the logic of building an HTTP Request to retrieve, find, create, update or delete values from the back-end
 */
declare class HttpRequest {
    type: RequestType
    method: String
    url: String
    headers: HeaderList
    pagination: Pagination
    sortBy: SortBy
    fields: Array<String>
    relationships: Array<String>
    conditions: Array<Condition>
    data: Object
    retrieve: function(String): HttpRequest
    setPage: function(Number): HttpRequest
    setLimit: function(Number): HttpRequest
    setOrderBy: function(String, String): HttpRequest
    setFields: function(Array<String>): HttpRequest
    setRelationships: function(Array<String>): HttpRequest
    where: function(String, Any): HttpRequest
    whereNot: function(String, Any): HttpRequest
    whereHigher: function(String, Any): HttpRequest
    whereLower: function(String, Any): HttpRequest
    whereHigherOrEqual: function(String, Any): HttpRequest
    whereLowerOrEqual: function(String, Any): HttpRequest
    whereContains: function(String, Any, Boolean): HttpRequest
    whereStartsWith: function(String, Any, Boolean): HttpRequest
    whereEndsWith: function(String, Any, Boolean): HttpRequest
    find: function(String): HttpRequest
    create: function(String, Any): HttpRequest
    update: function(String, Any): HttpRequest
    delete: function(String): HttpRequest
    setAuthorization: function(String): HttpRequest
    send: function(): Promise<AxiosResponse<T>>
}

export default HttpRequest
export { HttpRequest, SortDirections }