import { CapabilityWebhook } from './CapabilityWebhook';

/**
 * Represents the meetings-related capabilities configuration for an application.
 */
export type CapabilityMeetings = {
  /**
   * Webhook configuration for meetings-related events.
   */
  webhooks: {
    /**
     * Webhook for events related to changes in meeting rooms.
     */
    roomChanged: CapabilityWebhook;

    /**
     *  Webhook for events related to changes in meeting sessions.
     */
    sessionChanged: CapabilityWebhook;

    /**
     *  Webhook for events related to changes in meeting recording.
     */
    recordingChanged: CapabilityWebhook;
  };
};
