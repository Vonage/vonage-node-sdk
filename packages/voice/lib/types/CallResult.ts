import { CallStatus } from '../enums/index.js';

/**
 * Represents the result of a call, including the UUID, status, direction (inbound or outbound), and conversation UUID.
 */
export type CallResult = {
  /**
   * The universally unique identifier (UUID) associated with the call.
   */
  uuid: string;

  /**
   * The status of the call, indicating its current state or outcome.
   */
  status: CallStatus;

  /**
   * The direction of the call, specifying whether it is inbound or outbound.
   */
  direction: 'inbound' | 'outbound';

  /**
   * The UUID associated with the conversation related to the call.
   */
  conversationUUID: string;
};
