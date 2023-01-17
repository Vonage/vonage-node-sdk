import { Headers } from './headers';
import { VetchHttpRequest } from './vetchHttpRequest';
import { VetchOptions } from './vetchOptions';

export interface VetchResponse<T> {
    config: VetchOptions
    data: T
    error?: true
    status: number
    statusText: string
    headers: Headers
    request: VetchHttpRequest
}
