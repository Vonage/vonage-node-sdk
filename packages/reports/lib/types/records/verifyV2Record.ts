import { RecordCommon } from './recordCommon.js';

/**
 * Record for a Verify v2 verification request.
 */
export type VerifyV2Record = {
  /**
   * Channel used for verification. Possible values: `v2`, `email`,
   * `silent_auth`.
   */
  channel?: string,

  /**
   * Client reference provided in the original Verify request.
   */
  clientRef?: string,

  /**
   * Country of the verified phone number. Not applicable for `email`
   * channel.
   */
  country?: string,

  /**
   * Currency of the price for the Verify request.
   */
  currency?: string,

  /**
   * Date when Vonage received the verification request.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateReceived?: string,

  /**
   * Number of times the email channel was used for PIN delivery.
   */
  emailEventCount?: string,

  /**
   * Whether fraud check bypass was applied. Either `TRUE` or `FALSE`.
   */
  ifFraudCheck?: string,

  /**
   * Language in which the PIN was delivered.
   */
  locale?: string,

  /**
   * MCC/MNC network code of the verified phone number's network.
   */
  network?: string,

  /**
   * Name of the verified number's network.
   */
  networkName?: string,

  /**
   * Correlation ID between a `v2` record and its associated `email` or
   * `silent_auth` event records.
   */
  parentRequestId?: string,

  /**
   * Length of the PIN used in the request.
   */
  pinLength?: string,

  /**
   * Number of times RCS was used for PIN delivery.
   */
  rcsEventCount?: string,

  /**
   * Vonage's unique identifier for the verification request.
   */
  requestId?: string,

  /**
   * Number of times Silent Authentication was used for verification.
   */
  silentauthEventCount?: string,

  /**
   * Number of times SMS was used for PIN delivery.
   */
  smsEventCount?: string,

  /**
   * Status of the verification request.
   */
  status?: string,

  /**
   * Phone number or email address that was verified.
   */
  to?: string,

  /**
   * Total price of the Verify request.
   */
  totalPrice?: string,

  /**
   * Number of times Voice TTS was used for PIN delivery.
   */
  ttsEventCount?: string,

  /**
   * Number of times WhatsApp was used for PIN delivery.
   */
  whatsappEventCount?: string,
} & RecordCommon;
