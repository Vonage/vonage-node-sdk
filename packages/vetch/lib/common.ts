// Copyright 2020 Vonage
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export class VetchError<T = any> extends Error {
    code?: string
    response?: VetchResponse<T>
    config: VetchOptions
    constructor(
        message: string,
        options: VetchOptions,
        response: VetchResponse<T>
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
    responseURL: string
}

export type VetchPromise<T = any> = Promise<VetchResponse<T>>
export const VetchPromise = Promise;

export interface VetchResponse<T = any> {
    config: VetchOptions
    data: T
    status: number
    statusText: string
    headers: Headers
    request: VetchHttpRequest
}

export interface VetchOptions {
    adapter?: <T = any>(
        options: VetchOptions,
        defaultAdapter: (options: VetchOptions) => VetchPromise<T>
    ) => VetchPromise<T>
    url?: string
    baseURL?: string
    method?:
        | 'GET'
        | 'HEAD'
        | 'POST'
        | 'DELETE'
        | 'PUT'
        | 'CONNECT'
        | 'OPTIONS'
        | 'TRACE'
        | 'PATCH'
    headers?: Headers
    data?: any
    body?: any
    params?: any
    responseType?: 'json'
    checkStatus?: (status: number) => boolean
    size?: number
}

export interface RetryConfig {}

