import { CapabilityWebhook } from '../CapabilityWebhook';

/**
 * Represents the response for a capability webhook configuration.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @see {@link CapabilityWebhook}
 */
export type CapabilityWebhookResponse = {
  /**
   * The HTTP method to be used when sending data to the webhook endpoint. It can be either 'POST' or 'GET'.
   */
  http_method: 'POST' | 'GET';
} & Omit<CapabilityWebhook, 'httpMethod'>;
