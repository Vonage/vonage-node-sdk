import { CapabilityWebhookResponse } from './CapabilityWebhookResponse';

/**
 * Represents the response for bulk-related capabilities configuration.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type CapabilityBulkResponse = {
  /**
   * Webhook configuration for bulk events.
   */
  webhooks: {

    /**
     * Webhook for events related to bulk list status.
     */
    list_status_url: CapabilityWebhookResponse;

    /**
     * Webhook for events related to bulk run status.
     */
    run_status_url: CapabilityWebhookResponse;
  };
};
