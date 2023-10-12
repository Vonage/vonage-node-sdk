/**
 * Represents the response for creating a call, including the call's UUID, status, direction, and conversation UUID.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type CreateCallResponse = {
  /**
   * The UUID of the created call.
   */
  uuid: string;

  /**
   * The status of the created call.
   */
  status: string;

  /**
   * The direction of the call (e.g., "outbound" or "inbound").
   */
  direction: string;

  /**
   * The UUID of the conversation associated with the call.
   */
  conversation_uuid: string;
};
