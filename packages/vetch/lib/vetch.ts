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

import fetch, { Response as fetchResponse } from 'node-fetch'
import { stringify } from 'querystring'
import { merge } from 'lodash'

import {
    VetchError,
    VetchOptions,
    VetchPromise,
    VetchResponse,
    Headers,
} from './common'

export class Vetch {
    defaults: VetchOptions

    constructor(defaults?: VetchOptions) {
        this.defaults = defaults || {}
    }

    private async _defaultAdapter<T>(
        opts: VetchOptions
    ): Promise<VetchResponse<T>> {
        const res = await fetch(opts.url!, opts)
        const data = await this.getResponseData(opts, res)
        return this.createResponse<T>(opts, res, data)
    }

    async request<T = any>(opts: VetchOptions = {}): VetchPromise<T> {
        opts = this.validateOpts(opts)

        try {
            let formattedResponse: VetchResponse<T>
            formattedResponse = await this._defaultAdapter(opts)

            if (!opts.checkStatus!(formattedResponse.status)) {
                throw new VetchError<T>(
                    `Request failed with status code ${formattedResponse.status
                    }`,
                    opts,
                    formattedResponse
                )
            }

            return formattedResponse
        } catch (e) {
            const err = e as VetchError
            throw err
        }
    }

    private async getResponseData(
        opts: VetchOptions,
        res: fetchResponse
    ): Promise<any> {
        switch (opts.responseType) {
            case 'json': {
                let data = await res.text()
                try {
                    data = JSON.parse(data)
                } catch {
                    // continue
                }
                return data as {}
            }
            default:
                return res.text()
        }
    }

    private validateOpts(options: VetchOptions): VetchOptions {
        const opts = merge({}, this.defaults, options)

        opts.headers = opts.headers || {}
        opts.checkStatus = this.checkStatus
        opts.responseType = opts.responseType

        if (!opts.url) {
            throw new Error('URL is required.')
        }

        const baseUrl = opts.baseUrl || opts.baseURL
        if (baseUrl) {
            opts.url = baseUrl + opts.url
        }

        if (opts.params) {
            let queryParams = stringify(opts.params)
            if (queryParams.startsWith('?')) {
                queryParams = queryParams.slice(1)
            }

            let prefix = opts.url.includes('?') ? '&' : '?'
            opts.url = `${opts.url}${prefix}${queryParams}`
        }

        if (opts.data) {
            if (typeof opts.data === 'object') {
                opts.body = JSON.stringify(opts.data)
                opts.headers['Content-Type'] = 'application/json'
            } else {
                opts.body = opts.data
            }
        }

        if (!opts.headers['Accept'] && opts.responseType === 'json') {
            opts.headers['Accept'] = 'application/json'
        }

        return opts
    }

    private checkStatus(status: number) {
        return status >= 200 && status < 300
    }

    private createResponse<T>(
        opts: VetchOptions,
        res: fetchResponse,
        data?: T
    ): VetchResponse<T> {
        const headers = {} as Headers

        res.headers.forEach((value, key) => {
            headers[key] = value
        })

        return {
            config: opts,
            data: data as T,
            headers,
            status: res.status,
            statusText: res.statusText,
            request: {
                responseUrl: res.url,
            },
        }
    }
}
