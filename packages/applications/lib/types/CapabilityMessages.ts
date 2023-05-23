import { CapabilityWebhook } from './CapabilityWebhook';

export type CapabilityMessages = {
  webhooks: {
    inboundUrl: CapabilityWebhook;
    statusUrl: CapabilityWebhook;
  };
  version: 'v1' | 'v0.1';
  authenticateInboundMedia: boolean;
};
