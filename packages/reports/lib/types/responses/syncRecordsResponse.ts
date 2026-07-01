import { Product } from '../../enums/index.js';
import { AnyRecord } from '../records/index.js';

/**
 * HAL navigation links included in a synchronous records response.
 */
export type SyncRecordsLinks = {
  /**
   * Link to the current page of results.
   */
  self: {
    /**
     * URL of the current request.
     */
    href: string,
  },

  /**
   * Link to the next page of results. Present only when more records
   * are available.
   */
  next?: {
    /**
     * URL for retrieving the next page using cursor pagination.
     */
    href: string,
  },
};

/**
 * Response returned by GET /v2/reports/records. The `records` array
 * contains items of type `T`, which defaults to {@link AnyRecord}.
 *
 * @template T - The record type contained in the response.
 */
export type SyncRecordsResponse<T = AnyRecord> = {
  /**
   * HAL links for navigation and pagination.
   */
  links?: SyncRecordsLinks,
  /**
   * Cursor for retrieving the next page of results. Present only when
   * pagination is applicable.
   */
  cursor?: string,

  /**
   * Initialization vector for cursor processing. Present only when
   * pagination is applicable.
   */
  iv?: string,

  /**
   * Unique ID associated with this synchronous request.
   */
  requestId?: string,

  /**
   * Result status of the request. `TRUNCATED` indicates the result
   * set was cut short due to size limits.
   */
  requestStatus?: 'SUCCESS' | 'TRUNCATED',

  /**
   * Timestamp when the request was processed by the Reports API.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  receivedAt?: string,

  /**
   * Number of records returned in this page/response.
   */
  itemsCount?: number,

  /**
   * Comma-separated list of IDs that were not found when the request
   * was made using the `id` parameter.
   */
  idsNotFound?: string,

  /**
   * The product the records belong to.
   */
  product?: Product,

  /**
   * The list of records returned for this page.
   */
  records?: T[],
};
