import { CapabilityWebhook } from './CapabilityWebhook';

export type CapabilityBulk = {
  webhooks: {
    listStatusUrl: CapabilityWebhook;
    runStatusUrl: CapabilityWebhook;
  };
};
