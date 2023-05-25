import { CapabilityWebhook } from './CapabilityWebhook';

export type CapabilityMeetings = {
  webhooks: {
    roomChanged: CapabilityWebhook;
    sessionChanged: CapabilityWebhook;
    recordingChanged: CapabilityWebhook;
  };
};
