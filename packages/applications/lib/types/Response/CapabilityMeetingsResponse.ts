import { CapabilityWebhookResponse } from './CapabilityWebhookResponse';

/**
 * Represents the response for meetings-related capabilities configuration.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type CapabilityMeetingsResponse = {
  /**
   * Webhook configuration for meetings-related events.
   */
  webhooks: {
    /**
     * Webhook for events related to changes in meeting rooms.
     */
    room_changed: CapabilityWebhookResponse;

    /**
     * Webhook for events related to changes in meeting sessions.
     */
    session_changed: CapabilityWebhookResponse;

    /**
     * Webhook for events related to changes in meeting recording.
     */
    recording_changed: CapabilityWebhookResponse;
  };
};
