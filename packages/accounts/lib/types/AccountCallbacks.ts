/**
 * Represents the callbacks associated with an account.
 */
export type AccountCallbacks = {
  /**
   * The default webhook URL for inbound SMS. If an SMS is received at a Vonage
   * number that does not have its own inboud SMS webhook configured, Vonage
   * makes a request here.
   *
   * @remarks
   * Send an empty string to unset this value.
   */
  moCallBackUrl?: string;

  /**
   * The webhook URL that Vonage makes a request to when a
   * delivery receipt is available for an SMS sent by one of your Vonage numbers.
   *
   * @remarks
   * Send an empty string to unset this value.
   */
  drCallBackUrl?: string;
};
