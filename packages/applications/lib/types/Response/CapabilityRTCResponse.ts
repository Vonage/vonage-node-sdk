import { CapabilityWebhookResponse } from './CapabilityWebhookResponse';

export type CapabilityRTCResponse = {
  webhooks: {
    event_url: CapabilityWebhookResponse;
  };
  signed_callbacks: boolean;
  leg_persistence_time: number;
};
