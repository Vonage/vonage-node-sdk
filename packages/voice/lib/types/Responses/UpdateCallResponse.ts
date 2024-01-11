/**
 * Represents the response for updating a call, including a message and the UUID of the call.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type UpdateCallResponse = {
  /**
   * A message associated with the call update response.
   */
  message: string;

  /**
   * The UUID of the call that was updated.
   */
  uuid: string;
};
