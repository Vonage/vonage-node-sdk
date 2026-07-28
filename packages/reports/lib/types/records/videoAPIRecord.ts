import { RecordCommon } from './recordCommon.js';

/**
 * Record for a Video API event.
 */
export type VideoAPIRecord = {
  /**
   * ID of the Vonage application used.
   */
  applicationId?: string,

  /**
   * ID of the recording/archiving instance. Available for
   * `feature_name` = `Archiving`.
   */
  archiveId?: string,

  /**
   * ID of the broadcast instance. Available for
   * `feature_name` = `Broadcasting`.
   */
  broadcastId?: string,

  /**
   * ID of the Experience Composer instance. Available for
   * `feature_name` = `Experience composer`.
   */
  composerId?: string,

  /**
   * Currency associated with the total price.
   */
  currency?: string,

  /**
   * End date and time of the Video event.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateEnd?: string,

  /**
   * Start date and time of the Video event.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateStart?: string,

  /**
   * Duration of the Video event in seconds.
   */
  duration?: string,

  /**
   * Video API feature used (e.g. `Video Session`, `Archiving`,
   * `Broadcasting`, `HLS`, `Experience composer`, `SIP_Interconnect`,
   * `Audio_Connector`, `Live_Captions`, `Subscriber minutes`).
   */
  featureName?: string,

  /**
   * ID of the HLS live streaming instance. Available for
   * `feature_name` = `HLS`.
   */
  hlsId?: string,

  /**
   * ID of the meeting (segment) within the session. Available for
   * `feature_name` = `Video Session`.
   */
  meetingId?: string,

  /**
   * ID of the session (video room).
   */
  sessionId?: string,

  /**
   * ID of the Video Subscriber. Available for `feature_name` values
   * `Subscriber minutes`, `SIP_Interconnect`, `Audio_Connector`, and
   * `Live_Captions`.
   */
  subscriberId?: string,

  /**
   * Volume-based pricing tier applied to this record.
   */
  tierVolume?: string,

  /**
   * Total price of the Video event.
   */
  totalPrice?: string,
} & RecordCommon;
