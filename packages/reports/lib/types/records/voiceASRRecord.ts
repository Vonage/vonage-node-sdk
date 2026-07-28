import { RecordCommon } from './recordCommon.js';

/**
 * Record for an Automatic Speech Recognition (ASR) event.
 */
export type VoiceASRRecord = {
  /**
   * Quality of the ASR service. One of `standard` or `premier`.
   */
  asrType?: string,

  /**
   * ASR start time. Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  callDateStart?: string,

  /**
   * UUID of the call request.
   */
  callId?: string,

  /**
   * Currency of the price of the ASR event.
   */
  currency?: string,

  /**
   * Event end time. Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateEnd?: string,

  /**
   * Event record start time. Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateStart?: string,

  /**
   * Direction of the call, either `inbound` or `outbound`.
   */
  direction?: string,

  /**
   * Duration of the call in seconds.
   */
  duration?: string,

  /**
   * The caller number.
   */
  from?: string,

  /**
   * Price of the ASR event.
   */
  price?: string,

  /**
   * Status of the ASR event.
   */
  status?: string,

  /**
   * Description of the ASR event status.
   */
  statusDescription?: string,

  /**
   * The dialed number. For inbound calls, this is the virtual number.
   */
  to?: string,

  /**
   * Total price of the ASR event.
   */
  totalPrice?: string,
} & RecordCommon;
