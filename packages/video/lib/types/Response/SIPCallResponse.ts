/**
 * Represents the response for a SIP call initiation.
 */
export type SIPCallResponse = {
  /**
   * The unique identifier of the SIP call.
   */
  id: string;

  /**
   * The connection identifier associated with the SIP call.
   */
  connectionId: string;

  /**
   * The stream identifier associated with the SIP call.
   */
  streamId: string;
}
