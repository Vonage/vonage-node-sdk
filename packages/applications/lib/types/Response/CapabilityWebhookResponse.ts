import { CapabilityWebhook } from '../CapabilityWebhook';

export type CapabilityWebhookResponse = {
  http_method: 'POST' | 'GET';
} & Omit<CapabilityWebhook, 'httpMethod'>;
