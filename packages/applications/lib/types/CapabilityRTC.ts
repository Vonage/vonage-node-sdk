import { CapabilityWebhook } from './CapabilityWebhook';

export type CapabilityRTC = {
  webhooks: {
    eventUrl: CapabilityWebhook;
  };
  signedCallbacks: boolean;
  legPersistenceTime: number;
};
