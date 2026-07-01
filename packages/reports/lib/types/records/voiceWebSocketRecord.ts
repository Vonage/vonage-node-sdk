import { RecordCommon } from './recordCommon.js';

/**
 * Record for a Voice WebSocket call event.
 */
export type VoiceWebSocketRecord = {
  /**
   * UUID of the call request.
   */
  callId?: string,

  /**
   * Currency of the price of the WebSocket event.
   */
  currency?: string,

  /**
   * Event end time. Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateEnd?: string,

  /**
   * Event start time. Format: yyyy-mm-ddThh:mm:ss±hh:mm (UTC)
   */
  dateStart?: string,

  /**
   * Duration of the WebSocket event in seconds.
   */
  duration?: string,

  /**
   * Price of the WebSocket event.
   */
  price?: string,

  /**
   * Status of the WebSocket event.
   */
  status?: string,

  /**
   * Total price of the WebSocket event.
   */
  totalPrice?: string,
} & RecordCommon;
