import { CapabilityWebhookResponse } from './CapabilityWebhookResponse';

/**
 * Represents the response for RTC-related capabilities configuration.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type CapabilityRTCResponse = {
  /**
   * Webhook configuration for RTC events.
   */
  webhooks: {
    /**
     * Webhook for events related to RTC.
     */
    event_url: CapabilityWebhookResponse;
  };

  /**
   * Whether to use signed webhooks for RTC events.
   */
  signed_callbacks: boolean;

  /**
   * The leg persistence time for RTC events.
   */
  leg_persistence_time: number;
};
