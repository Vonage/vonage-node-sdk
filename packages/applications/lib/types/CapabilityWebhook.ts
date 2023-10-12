/**
 * Represents the base properties for a capability webhook configuration.
 */
export type CapabilityWebhook = {
  /**
   * The URL endpoint to which the webhook data will be sent.
   */
  address: string;

  /**
   * The HTTP method to be used when sending data to the webhook endpoint.
   * It can be either 'POST' or 'GET'.
   */
  httpMethod: 'POST' | 'GET';
};
