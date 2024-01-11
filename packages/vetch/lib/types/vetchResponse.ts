import { VetchOptions } from './vetchOptions';
import { Headers } from '../types';

/**
 * Represents the response returned by a Vetch request.
 *
 * @template T - The type of the response data.
 */
export type VetchResponse<T> = {
  /**
   * The configuration options used for the request.
   */
  config: VetchOptions;

  /**
   * The parsed response data.
   */
  data: T;

  /**
   * The response headers.
   */
  headers: Headers;

  /**
   * The HTTP status code of the response.
   */
  status: number;

  /**
   * The HTTP status text of the response.
   */
  statusText: string;

  /**
   * The configuration options for the request (same as 'config').
   */
  request: VetchOptions;
};
