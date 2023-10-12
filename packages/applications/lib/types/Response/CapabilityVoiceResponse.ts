import { CapabilityWebhookResponse } from './CapabilityWebhookResponse';
import { CapabilityVoice } from '../CapabilityVoice';

/**
 * Event URL configuration response
 *
 * @see {@link EventCallbackUrl}
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type EventUrlResponse = {
  /**
   * Socket timeout in milliseconds.
   */
  socketTimeout?: number;
  /**
   * Connection timeout in milliseconds.
   */
  connectTimeout?: number;
} & CapabilityWebhookResponse;

/**
 * Answer URL configuration response
 *
 * @see {@link AnswerCallbackUrl}
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type AnswerUrlResponse = {
  /**
   * Socket timeout in milliseconds.
   */
  socket_timeout?: number;
  /**
   * Connection timeout in milliseconds.
   */
  connect_timeout?: number;
} & CapabilityWebhookResponse;

/**
 * Fallback URL configuration response
 *
 * @see {@link FallbackAnswerUrlResponse}
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type FallbackAnswerUrlResponse = {
  /**
   * Socket timeout in milliseconds.
   */
  socket_timeout?: number;
  /**
   * Connection timeout in milliseconds.
   */
  connect_timeout?: number;
} & CapabilityWebhookResponse;

/**
 * Represents the response for voice-related capabilities configuration.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type CapabilityVoiceResponse = {
  /**
   * Webhook configuration for voice events.
   */
  webhooks: {
    /**
     * Webhook for events related to voice calls.
     */
    event_url: EventUrlResponse

    /**
     * Webhook for voice call answer events.
     */
    answer_url: AnswerUrlResponse
    /**
     * Webhook for fallback voice call answer events.
     */
    fallback_answer_url: FallbackAnswerUrlResponse
  };

  /**
   * Indicates whether payment is enabled.
   */
  payment_enabled: boolean;
  /**
   * Whether to use signed webhooks for voice events.
   *   Refer to [the Webhooks documentation](https://developer.vonage.com/en/getting-started/concepts/webhooks#decoding-signed-webhooks) for more information.
   */
  signed_callbacks: boolean;
  /**
   * The length of time named conversations will remain active for after creation, in hours.
   *   0 means infinite. Maximum value is 744 (i.e., 31 days).
   */
  conversations_ttl: number;
} & Omit<
  CapabilityVoice,
  'webhooks' | 'paymentEnabled' | 'signedCallbacks' | 'conversationsTTL'
>;
