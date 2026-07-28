import { RecordCommon } from './recordCommon.js';

/**
 * Record for a Verify API (v1) verification request.
 */
export type VerifyAPIRecord = {
  /**
   * ISO two-letter country code of the verified number.
   */
  country?: string,

  /**
   * Country name of the verified number.
   */
  countryName?: string,

  /**
   * Currency of the price. Always returns an empty string.
   */
  currency?: string,

  /**
   * Date when the verification request reached its final state.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateFinalized?: string,

  /**
   * Date when Vonage received the verification request.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateReceived?: string,

  /**
   * Estimated price.
   */
  estimatedPrice?: string,

  /**
   * Date and time when the first verification code was sent.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  firstEventDate?: string,

  /**
   * Sender ID used for the verification request.
   */
  from?: string,

  /**
   * Date and time when the last verification code was sent.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  lastEventDate?: string,

  /**
   * Language/locale used in the verification communication.
   */
  locale?: string,

  /**
   * Network code of the verified number.
   */
  network?: string,

  /**
   * Name of the network code.
   */
  networkName?: string,

  /**
   * Type of the verified number (e.g. `MOBILE`).
   */
  numberType?: string,

  /**
   * Price of the verification request.
   */
  price?: string,

  /**
   * Pricing model applied.
   */
  pricingModel?: string,

  /**
   * ID of the verification request.
   */
  requestId?: string,

  /**
   * Number of SMS events used in the verification workflow.
   */
  smsEventCount?: string,

  /**
   * Price of SMS events used in the verification workflow.
   */
  smsPrice?: string,

  /**
   * Outcome of the verification request (e.g. `SUCCESS`).
   */
  status?: string,

  /**
   * Mobile or landline number that was verified.
   */
  to?: string,

  /**
   * Number of Voice TTS events used in the verification workflow.
   */
  ttsEventCount?: string,

  /**
   * Price of Voice TTS events used in the verification workflow.
   */
  ttsPrice?: string,
} & RecordCommon;
