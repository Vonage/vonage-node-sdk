import http from 'node:http'
import https from 'node:https'

export class VetchError extends Error {
    code?: string
    config: VetchOptions
    response: VetchResponse<any>
    constructor(message: string, options: VetchOptions) {
        super(message)
        this.config = options
    }
}

export interface Headers {
    [index: string]: any
}

export interface VetchHttpRequest {
    responseUrl: string
}

export type VetchPromise<T> = Promise<VetchResponse<T>>
export const VetchPromise = Promise

export type NumbersResponse<T> = VetchResponse<T>

export interface VetchResponse<T> {
    config: VetchOptions
    data: T
    error?: true
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
    PATCH = 'PATCH',
}

export enum ResponseTypes {
    json = 'json',
}

export interface VetchOptions {
    adapter?: <T = any>(
        options: VetchOptions,
        defaultAdapter: (options: VetchOptions) => VetchPromise<T>
    ) => VetchPromise<T>
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
    timeout?: number
    agent?:
        | boolean
        | http.Agent
        | https.Agent
        | ((parsedUrl: URL) => boolean | https.Agent | http.Agent)
}
