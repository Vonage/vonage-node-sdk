import { CapabilityWebhookResponse } from './CapabilityWebhookResponse';

export type CapabilityMeetingsResponse = {
  webhooks: {
    room_changed: CapabilityWebhookResponse;
    session_changed: CapabilityWebhookResponse;
    recording_changed: CapabilityWebhookResponse;
  };
};
