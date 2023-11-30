/**
 * Represents the result of updating a call, including the UUID and a message describing the update.
 */
export type CallUpdateResult = {
  /**
   * The universally unique identifier (UUID) associated with the call.
   */
  uuid: string;

  /**
   * A message describing the update or the result of the call update operation.
   */
  message: string;
};
