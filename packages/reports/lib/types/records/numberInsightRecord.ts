import { RecordCommon } from './recordCommon.js';

/**
 * Record for a Number Insight (v1) lookup request.
 */
export type NumberInsightRecord = {
  /**
   * ISO two-letter country code of the looked-up number.
   */
  country?: string,

  /**
   * Country name of the looked-up number.
   */
  countryName?: string,

  /**
   * Currency of the price of the request. Always returns an empty
   * string.
   */
  currency?: string,

  /**
   * Date when the Number Insight request was processed.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateReceived?: string,

  /**
   * First name associated with the looked-up number.
   */
  firstName?: string,

  /**
   * Last name associated with the looked-up number.
   */
  lastName?: string,

  /**
   * Network code of the looked-up number.
   */
  network?: string,

  /**
   * Name of the network code.
   */
  networkName?: string,

  /**
   * Type of the looked-up number (e.g. `mobile`).
   */
  networkType?: string,

  /**
   * Phone number that was looked up.
   */
  number?: string,

  /**
   * Porting status of the number (e.g. `not_ported`).
   */
  ported?: string,

  /**
   * Internal product type name.
   */
  productType?: string,

  /**
   * Reachability status of the number (e.g. `present`).
   */
  reachable?: string,

  /**
   * ID of the Number Insight request.
   */
  requestId?: string,

  /**
   * Response code from the lookup event.
   */
  responseCode?: string,

  /**
   * Status of the lookup (e.g. `Success`).
   */
  status?: string,

  /**
   * Price charged to the customer for this lookup.
   */
  totalPrice?: string,

  /**
   * Whether the number is valid (e.g. `valid`).
   */
  valid?: string,
} & RecordCommon;
