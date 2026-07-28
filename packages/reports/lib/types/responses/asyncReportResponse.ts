import { AsyncReportStatus } from '../../enums/asyncReportStatus.js';
import { AnyAsyncReportParams } from '../parameters/index.js';

/**
 * HAL navigation links included in an asynchronous report response.
 */
export type AsyncReportLinks = {
  /**
   * Link to this report's status endpoint.
   */
  self: {
    /**
     * URL of this report's status resource.
     */
    href: string,
  },

  /**
   * Link to download the completed report. Present only when
   * `requestStatus` is `SUCCESS` or `TRUNCATED`.
   */
  downloadReport?: {
    /**
     * URL to download the report file.
     */
    href: string,
  },
};

/**
 * Response returned by POST /v2/reports (create) and
 * GET /v2/reports/{reportId} (status). Contains report metadata and
 * the original request parameters echoed back.
 *
 * @template T - The request params type echoed in the response.
 *   Defaults to {@link AnyAsyncReportParams}.
 */
export type AsyncReportResponse<T = AnyAsyncReportParams> = {
  /**
   * UUID of the asynchronous report request.
   */
  requestId: string,

  /**
   * Current status of the report request.
   */
  requestStatus: AsyncReportStatus,

  /**
   * Time at which the report request was received by the Reports API.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  receiveTime: string,

  /**
   * Time at which report processing started.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  startTime: string,

  /**
   * Number of records in the report.
   */
  itemsCount: number,

  /**
   * HAL links for accessing and downloading the report.
   */
  links: AsyncReportLinks,
} & T;
