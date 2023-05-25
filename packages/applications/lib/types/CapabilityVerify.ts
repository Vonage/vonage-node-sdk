import { CapabilityWebhook } from './CapabilityWebhook';

export type CapabilityVerify = {
  webhooks: {
    statusUrl: CapabilityWebhook;
  };
  version: 'v2';
};
