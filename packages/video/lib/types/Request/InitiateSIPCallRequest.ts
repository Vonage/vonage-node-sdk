import { SIPCallOptions } from '../SIPCallOptions';

/**
 * Represents the request to initiate a SIP call with additional session information.
 */
export type InitiateSIPCallRequest = SIPCallOptions & {
  /**
   * The session ID of the Vonage Video session to associate with the SIP call.
   */
  sessionId: string;
};
