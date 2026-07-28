import { RecordCommon } from './recordCommon.js';

/**
 * Record for an Answering Machine Detection (AMD) event.
 */
export type VoiceAMDRecord = {
  /**
   * Whether a beep was detected by AMD.
   */
  amdBeepDetectionResult?: boolean,

  /**
   * Result of AMD detection — either `human` or `machine`.
   */
  amdDetectionResult?: string,

  /**
   * Whether AMD events were sent to the requester.
   */
  amdResultSent?: string,

  /**
   * Maximum time in seconds Vonage waits for a machine beep.
   * Value of the `beep_timeout` defined by the user (30–120 seconds).
   */
  amdUserDefinedBeepTimeout?: number,

  /**
   * Behavior requested when AMD result is determined.
   * Possible values: `hangup`, `continue`.
   */
  amdUserDefinedBehavior?: string,

  /**
   * Detection mode requested. Possible values: `default`, `detect`,
   * `detect_beep`.
   */
  amdUserDefinedMode?: string,

  /**
   * UUID of the call request.
   */
  callId?: string,

  /**
   * Currency of the total price for the AMD feature.
   */
  currency?: string,

  /**
   * Detection end time. Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  endTime?: string,

  /**
   * Detection start time. Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  startTime?: string,

  /**
   * Total price of the AMD feature.
   */
  totalPrice?: string,
} & RecordCommon;
