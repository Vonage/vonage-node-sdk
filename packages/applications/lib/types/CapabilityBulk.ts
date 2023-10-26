import { CapabilityWebhook } from './CapabilityWebhook';

/**
 * Represents a bulk capability configuration containing webhooks.
 */
export type CapabilityBulk = {
  /**
   * Webhook configuration for proactive-connect related events.
   */
  webhooks: {
    /**
     * URL for listing status related to bulk operations.
     */
    listStatusUrl: CapabilityWebhook;

    /**
     * URL for running status related to bulk operations.
     */
    runStatusUrl: CapabilityWebhook;
  };
};
