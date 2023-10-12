import { CallStatus } from '../enums';

/**
 * Represents basic details of a call, including its UUID, conversation UUID, duration, and status.
 */
export type BasicCallDetail = {
  /**
   * The UUID of the call.
   */
  uuid: string;

  /**
   * The UUID of the conversation associated with the call.
   */
  conversationUUID: string;

  /**
   * The duration of the call in a string format.
   */
  duration: string;

  /**
   * The status of the call, indicating its current state.
   */
  status: CallStatus;
};
