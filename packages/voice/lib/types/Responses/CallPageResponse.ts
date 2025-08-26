import { APILinks } from '@vonage/server-client';
import { CallDetailResponse } from '../../types/index.js';

/**
 * Represents the response for a page of call details, including information
 * about the page itself and an array of call details.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type CallPageResponse = {
  /**
   * The total count of call details in the response.
   */
  count: number;

  /**
   * The number of call details per page.
   */
  page_size: number;

  /**
   * The index of the first call detail in the current page.
   */
  record_index: number;

  /**
   * An embedded object containing an array of call details.
   */
  _embedded: {
    /**
     * An array of call details.
     */
    calls: Array<CallDetailResponse>;
  };
} & APILinks;
