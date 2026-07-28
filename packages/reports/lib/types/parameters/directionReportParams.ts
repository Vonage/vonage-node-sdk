import { Direction } from '../../enums/index.js';

/**
 * Direction filter parameter for report requests.
 */
export type DirectionReportParams = {
  /**
   * Direction of the communication — inbound (received by Vonage) or
   * outbound (originated from Vonage). Required for SMS and MESSAGES;
   * optional for VOICE-CALL, VOICE-FAILED, and ASR.
   */
  direction?: Direction,
};
