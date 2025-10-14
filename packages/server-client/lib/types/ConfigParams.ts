import { ResponseTypes } from '@vonage/vetch';

/**
 * Type defining configuration parameters for API requests.
 *
 * @see {@link https://github.com/vonage/vetch} for more information on ResponseTypes.
 */
export type ConfigParams = {
  /**
   * The host for REST API requests.
   */
  restHost?: string;

  /**
   * The host for general API requests.
   */
  apiHost?: string;

  /**
   * The host for video-related API requests.
   */
  videoHost?: string;

  /**
   * The desired response type for API requests.
   * @deprecated The client will now use the `content-type` header to decode the
   * response properly
   */
  responseType?: ResponseTypes;

  /**
   * The maximum time, in milliseconds, to wait for API responses.
   */
  timeout?: number;

  /**
   * The host for meetings-related API requests.
   */
  meetingsHost?: string;

  /**
   * European host
   */
  identityInsightsHost?: string;

  /**
   * A string to append to the User-Agent header in API requests.
   */
  appendUserAgent?: string;
};
