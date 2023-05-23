import { CapabilityWebhookResponse } from './CapabilityWebhookResponse';
import { CapabilityVerify } from '../CapabilityVerify';

export type CapabilityVerifyResponse = {
  webhooks: {
    status_url: CapabilityWebhookResponse;
  };
} & Omit<CapabilityVerify, 'webhooks'>;
