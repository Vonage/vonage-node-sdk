import { CapabilityWebhook } from './CapabilityWebhook.js';

/**
 * Represents a configuration for messaging capabilities.
 */
export type CapabilityMessages = {
  /**
   * Webhook configuration for inbound messages.
   */
  webhooks: {
    /**
     * URL for handling inbound messages.
     */
    inboundUrl: CapabilityWebhook;

    /**
     * URL for handling message status events.
     */
    statusUrl: CapabilityWebhook;
  };

  /**
   * The version of messaging capabilities ('v1' or 'v0.1').
   */
  version: 'v1' | 'v0.1';

  /**
   * Whether to authenticate inbound media.
   */
  authenticateInboundMedia: boolean;
};
