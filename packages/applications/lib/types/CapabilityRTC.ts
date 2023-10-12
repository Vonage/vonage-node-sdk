import { CapabilityWebhook } from './CapabilityWebhook';

/**
 * Represents a configuration for RTC (Real-Time Communication) capabilities.
 */
export type CapabilityRTC = {
  /**
   * Webhook configuration for RTC events.
   */
  webhooks: {
    /**
     * URL for handling RTC events.
     */
    eventUrl: CapabilityWebhook;
  };

  /**
   * Whether to use signed callbacks for RTC.
   */
  signedCallbacks: boolean;

  /**
   * The leg persistence time for RTC in milliseconds.
   */
  legPersistenceTime: number;
};
