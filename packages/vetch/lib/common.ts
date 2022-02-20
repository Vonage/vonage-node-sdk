export class VetchError extends Error {
    code?: string
    response?: VetchResponse
    config: VetchOptions
    constructor(
        message: string,
        options: VetchOptions,
        response: VetchResponse
    ) {
        super(message)
        this.response = response
        this.config = options
        this.code = response.status.toString()
    }
}

export interface Headers {
    [index: string]: any
}

export interface VetchHttpRequest {
    responseUrl: string
}

export type VetchPromise = Promise<VetchResponse>
export const VetchPromise = Promise;

export interface VetchResponse {
    config: VetchOptions
    data: any
    status: number
    statusText: string
    headers: Headers
    request: VetchHttpRequest
}

export enum HTTPMethods {
    GET = 'GET',
    HEAD = 'HEAD',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
    CONNECT = 'CONNECT',
    OPTIONS = 'OPTIONS',
    TRACE = 'TRACE',
    PATCH = 'PATCH'
}

export enum ResponseTypes {
    json = 'json'
}

export interface VetchOptions {
    adapter?: <T = any>(
        options: VetchOptions,
        defaultAdapter: (options: VetchOptions) => VetchPromise
    ) => VetchPromise
    url?: string
    baseUrl?: string
    baseURL?: string
    method?: HTTPMethods
    headers?: Headers
    data?: any
    body?: any
    params?: any
    responseType?: ResponseTypes
    checkStatus?: (status: number) => boolean
    size?: number
}

export interface RetryConfig { }