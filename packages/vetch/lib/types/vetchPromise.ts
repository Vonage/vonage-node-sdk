import { VetchResponse } from './vetchResponse';

/**
 * Type representing a promise that resolves with a standardized Vetch API
 * response. Vetch ("Vonage Fetch") ensures a consistent API response
 * structure, irrespective of the HTTP adapter utilized by the developer.
 *
 * @deprecated
 *
 * @template T - The type of the data payload in the VetchResponse, expected to be an object that has been decoded from JSON or WebForm.
 */
export type VetchPromise<T> = Promise<VetchResponse<T>>
