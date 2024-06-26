import { VetchResponse } from '@vonage/vetch';

/**
 * Represents a response for phone numbers.
 * @template T The type of the response data.
 */
export type NumbersResponse<T> = VetchResponse<T>;
