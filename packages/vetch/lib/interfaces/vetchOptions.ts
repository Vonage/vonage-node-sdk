import { HTTPMethods } from '../enums/HTTPMethods';
import { Headers } from './headers';
import { ResponseTypes } from '../enums/responseTypes';
import http from 'http';
import https from 'https';
import URL from 'url';
import { VetchPromise } from '../types/vetchPromise';

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
