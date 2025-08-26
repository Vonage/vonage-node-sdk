import { CapabilityWebhookResponse } from './CapabilityWebhookResponse.js';
import { CapabilityVerify } from '../CapabilityVerify.js';

/**
 * Represents the response for verification-related capabilities configuration.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type CapabilityVerifyResponse = {
  /**
   * Webhook configuration for verification events.
   */
  webhooks: {
    /**
     * Webhook for events related to verification status.
     */
    status_url: CapabilityWebhookResponse;
  };
} & Omit<CapabilityVerify, 'webhooks'>;
