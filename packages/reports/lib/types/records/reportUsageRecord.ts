import { RecordCommon } from './recordCommon.js';

/**
 * Record for a Reports API usage entry.
 */
export type ReportUsageRecord = {
  /**
   * Account authenticated when making the Reports API call. Not
   * necessarily the same as `accountId` when requesting data for a
   * subaccount.
   */
  acc?: string,

  /**
   * Currency of the price of the report.
   */
  currency?: string,

  /**
   * Date when Reports API finished processing the request.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateFinished?: string,

  /**
   * Date when the report was requested by the customer.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateReceived?: string,

  /**
   * Date when Reports API started processing the request.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateStarted?: string,

  /**
   * Whether the report request was charged. Either `TRUE` or `FALSE`.
   */
  isCharged?: string,

  /**
   * Number of CDRs/records returned in the report.
   */
  itemsWritten?: string,

  /**
   * Type of Reports API job. Possible values: `SYNC_JOB_FROM_ID`,
   * `SYNC_JOB_FROM_DATES`, `ASYNC_JOB`.
   */
  jobType?: string,

  /**
   * Master account ID of the requested account. Equals `accountId`
   * when no master account is available.
   */
  masterAccountId?: string,

  /**
   * Price per CDR/record in the report.
   */
  price?: string,

  /**
   * Report's API product type. Always `reports`.
   */
  productType?: string,

  /**
   * Parameters used in the original report request.
   */
  requestParams?: {
    /**
     * The product the report was requested for.
     */
    product?: string,

    /**
     * The account ID the report was requested for.
     */
    accountId?: string,

    /**
     * Start date of the requested report range.
     */
    dateStart?: string,

    /**
     * End date of the requested report range.
     */
    dateEnd?: string,
  },

  /**
   * Product requested in the report (e.g. `SMS`).
   */
  requestProduct?: string,
  /**
   * Status of the report request (e.g. `SUCCESS`).
   */
  status?: string,

  /**
   * Volume-based pricing tier applied to this record.
   */
  tierVolume?: string,

  /**
   * Total price for the whole report.
   */
  totalPrice?: string,
} & RecordCommon;
