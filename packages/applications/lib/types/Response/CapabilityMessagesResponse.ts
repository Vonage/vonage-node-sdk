import { CapabilityWebhookResponse } from './CapabilityWebhookResponse';
import { CapabilityMessages } from '../CapabilityMessages';

/**
 * Represents the response for messages-related capabilities configuration.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type CapabilityMessagesResponse = {
  /**
   * Webhook configuration for messages-related events.
   */
  webhooks: {
    /**
     * Webhook for inbound messages.
     */
    inbound_url: CapabilityWebhookResponse;

    /**
     * Webhook for events related to message status.
     */
    status_url: CapabilityWebhookResponse;
  };

  /**
   * Whether to authenticate inbound media for messages.
   */
  authenticate_inbound_media: boolean;
} & Omit<
  CapabilityMessages,
  'version' | 'webhooks' | 'authenticateInboundMedia'
>;
