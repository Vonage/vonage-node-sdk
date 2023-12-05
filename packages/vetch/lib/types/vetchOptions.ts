import { ContentType, HTTPMethods, ResponseTypes } from '../enums';
import { Headers } from './headers';

/**
 * Options to configure the Vetch request.
 *
 * @example
 * const options: VetchOptions = {
 *   type: ContentType.JSON,
 *   method: HTTPMethods.GET,
 *   url: 'https://api.example.com/data'
 * };
 */
export type VetchOptions = {
  /**
   * The content type for the request, e.g., JSON, WebForm, etc.
   */
  type: ContentType;

  /**
   * The HTTP method to use for the request, e.g., GET, POST, etc.
   */
  method: HTTPMethods;

  /**
   * The URL endpoint for the request.
   */
  url: string;

  /**
   * Request body data. Use 'data' instead of 'body' for newer implementations.
   */
  data?: Record<string, string | readonly string[]> | string;

  /** @deprecated Use 'data' instead of 'body' */
  body?: Record<string, string | readonly string[]>;

  /**
   * Query parameters for the request.
   */
  params?: Record<string, string | readonly string[]>;

  /**
   * Expected response type.
   * @deprecated `ResponseTypes` is deprecated and will be removed in future versions.
   */
  responseType?: ResponseTypes;

  /**
   * A function to check the response status.
   */
  checkStatus?: (status: number) => boolean;

  /**
   * Additional user agent string to append.
   */
  appendUserAgent?: string;

  /**
   * The headers to be sent with the request.
   */
  headers?: Headers;

  /**
   * Time in milliseconds to wait for the request to complete.
   */
  timeout?: number;
}
