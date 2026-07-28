import { RecordCommon } from './recordCommon.js';

/**
 * Record for a Voice Text-to-Speech (TTS) event.
 */
export type VoiceTTSRecord = {
  /**
   * Timestamp of when this UDR record was created.
   */
  creationDate?: string,

  /**
   * Currency of the price of the TTS event.
   */
  currency?: string,

  /**
   * Duration of the TTS event in seconds.
   */
  duration?: string,

  /**
   * Date and time the TTS event ended.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  endTime?: string,

  /**
   * The caller number used by the customer.
   */
  from?: string,

  /**
   * BCP-47 language code used for the TTS voice.
   */
  language?: string,

  /**
   * Message length in characters.
   */
  length?: string,

  /**
   * Message size in bytes.
   */
  size?: string,

  /**
   * @deprecated Premium/standard quality indicator.
   */
  premium?: string,

  /**
   * Price per unit for the TTS event.
   */
  price?: string,

  /**
   * Date and time the TTS event started.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  startTime?: string,

  /**
   * Final status of the TTS event.
   */
  status?: string,

  /**
   * Voice style index used for the TTS event.
   */
  style?: string,

  /**
   * The dialed number. For inbound calls, this is the virtual number.
   */
  to?: string,

  /**
   * Total price of the TTS event.
   */
  totalPrice?: string,

  /**
   * Trace identifier for the TTS event.
   */
  traceId?: string,

  /**
   * Voice quality used. One of `standard`, `premium`, or `premier`.
   */
  ttsType?: string,
} & RecordCommon;
