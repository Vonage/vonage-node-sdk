import { CapabilityWebhookResponse } from './CapabilityWebhookResponse';

export type CapabilityBulkResponse = {
  webhooks: {
    list_status_url: CapabilityWebhookResponse;
    run_status_url: CapabilityWebhookResponse;
  };
};
