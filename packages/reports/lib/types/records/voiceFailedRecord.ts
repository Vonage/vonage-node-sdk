import { RecordCommon } from './recordCommon.js';

/**
 * Record for a failed (rejected) Voice API call.
 */
export type VoiceFailedRecord = {
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
   * The caller number.
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
   * Status of the call. Always `FAILED` for failed call records.
   */
  status?: string,

  /**
   * SIP/HTTP response code received (e.g. `480`, `486`).
   */
  statusCode?: string,

  /**
   * Description of the failure reason.
   */
  statusDescription?: string,

  /**
   * The dialed number. For inbound calls, this is the virtual number.
   */
  to?: string,
} & RecordCommon;
