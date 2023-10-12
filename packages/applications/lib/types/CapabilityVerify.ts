import { CapabilityWebhook } from './CapabilityWebhook';

/**
 * Represents a configuration for verification capabilities.
 */
export type CapabilityVerify = {
  /**
   * Webhook configuration for verification status events.
   */
  webhooks: {
    /**
     * URL for handling verification status events.
     */
    statusUrl: CapabilityWebhook;
  };

  /**
   * The version of verification capabilities ('v2').
   */
  version: 'v2';
};
