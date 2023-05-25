import { CapabilityWebhookResponse } from './CapabilityWebhookResponse';
import { CapabilityMessages } from '../CapabilityMessages';

export type CapabilityMessagesResponse = {
  webhooks: {
    inbound_url: CapabilityWebhookResponse;
    status_url: CapabilityWebhookResponse;
  };
  authenticate_inbound_media: boolean;
} & Omit<
  CapabilityMessages,
  'version' | 'webhooks' | 'authenticateInboundMedia'
>;
