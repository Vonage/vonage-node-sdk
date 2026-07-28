import { RecordCommon } from './recordCommon.js';

/**
 * Record for a Voice API call.
 */
export type VoiceCallRecord = {
  /**
   * UUID of the call request.
   */
  callId?: string,

  /**
   * Country where the call was sent.
   */
  country?: string,

  /**
   * Country name where the call was sent.
   */
  countryName?: string,

  /**
   * Currency of the price of the call.
   */
  currency?: string,

  /**
   * Date and time the call ended.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateEnd?: string,

  /**
   * Date and time the call started.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
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
   * The number used instead of `from` when special routing rules
   * applied. Empty if not applicable.
   */
  forcedFrom?: string,

  /**
   * The caller number requested by the customer.
   */
  from?: string,

  /**
   * Network code of the destination number.
   */
  network?: string,

  /**
   * Name of the destination network.
   */
  networkName?: string,

  /**
   * Price per minute for the call.
   */
  price?: string,

  /**
   * Final status of the call. Always `ANSWERED` for voice call records.
   */
  status?: string,

  /**
   * SIP/HTTP response code received.
   */
  statusCode?: string,

  /**
   * Description of the call status.
   */
  statusDescription?: string,

  /**
   * Volume-based pricing tier applied to this record.
   */
  tierVolume?: string,

  /**
   * The dialed number. For inbound calls, this is the virtual number.
   */
  to?: string,

  /**
   * Total price of the call.
   */
  totalPrice?: string,
} & RecordCommon;
