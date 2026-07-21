import { RecordCommon } from './recordCommon.js';

/**
 * Record for a Network API Event (CAMARA product event).
 */
export type NetworkAPIEventRecord = {
  /**
   * ID of the Vonage application used. Populated when present.
   */
  applicationId?: string,

  /**
   * Correlation ID shared across all intermediate events of the same
   * request.
   */
  correlationId?: string,

  /**
   * ISO 3166 two-character country code of the MSISDN used.
   */
  countryCode?: string,

  /**
   * Currency of the total price.
   */
  currency?: string,

  /**
   * Time of the event in UTC.
   */
  eventTime?: string,

  /**
   * Phone number used in the request.
   */
  msisdn?: string,

  /**
   * Network code associated with the MSISDN.
   */
  network?: string,

  /**
   * CAMARA product name (e.g. `camara-sim-swap`,
   * `camara-device-status`).
   */
  productName?: string,

  /**
   * API path that initiated the call to this service.
   */
  productPath?: string,

  /**
   * Date and time when the UDR record was generated.
   * Format: yyyy-MM-dd'T'HH:mm:ss.ff3Z
   */
  recordCreationTime?: string,

  /**
   * Vonage request session ID. Can be used to look up a specific
   * CDR/log item.
   */
  requestSessionId?: string,

  /**
   * Type of request (e.g. `check` or `retrieve-date` for SIM Swap).
   */
  requestType?: string,

  /**
   * Response value returned from the CAMARA API.
   */
  responseResult?: string,

  /**
   * Status of the request. Possible values: `SUCCESS`, `FAILED`.
   */
  status?: string,

  /**
   * Price of the Network API event.
   */
  totalPrice?: string,
} & RecordCommon;
