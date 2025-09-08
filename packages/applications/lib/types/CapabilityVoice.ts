import { CapabilityWebhook } from './CapabilityWebhook.js';
import { VoiceRegions } from '../enums/index.js';

/**
 * Vonage numbers that are linked to Vonage applications will use the answer_url
 * to retrieve an NCCO
 */
export type AnswerCallbackUrl = {
  /**
   * Socket timeout in milliseconds.
   */
  socketTimeout?: number;

  /**
   * Connection timeout in milliseconds.
   */
  connectTimeout?: number;
} & CapabilityWebhook;

/**
 * Vonage numbers that are linked to Vonage applications will use the answer_url
 * to retrieve an NCCO, and the event url to send call status information to you
 *
 * @link https://developer.vonage.com/en/getting-started/concepts/webhooks?lang=voice
 */
export type EventCallbackUrl = {
  /**
   * Socket timeout in milliseconds.
   */
  socketTimeout?: number;

  /**
   * Connection timeout in milliseconds.
   */
  connectTimeout?: number;
} & CapabilityWebhook;

/**
 * The fallback answer url can optionally be configured. This is used when
 * answer url is offline or returning an HTTP error code.
 *
 * @link https://developer.vonage.com/en/getting-started/concepts/webhooks?lang=voice
 */
export type FallbackAnswerUrl = {
  /**
   * Socket timeout in milliseconds.
   */
  socketTimeout?: number;

  /**
   * Connection timeout in milliseconds.
   */
  connectTimeout?: number;
} & CapabilityWebhook;

/**
 * Represents the voice-related capabilities configuration for an application.
 *
 * @link https://developer.vonage.com/en/getting-started/concepts/webhooks?lang=voice
 */
export type CapabilityVoice = {
  /**
   *  Webhook configuration for voice events.
   */
  webhooks?: {
    /**
     * Webhook for events related to voice calls.
     */
    eventUrl?: EventCallbackUrl;

    /**
     *  Webhook for voice call answer events.
     */
    answerUrl?: AnswerCallbackUrl;

    /**
     * Webhook for fallback voice call answer events.
     */
    fallbackAnswerUrl?: FallbackAnswerUrl;
  };

  /**
   * Indicates whether payment is enabled.
   */
  paymentEnabled?: boolean;

  /**
   * Whether to use signed webhooks for voice events.
   *
   * @remarks Refer to {@link https://developer.vonage.com/en/getting-started/concepts/webhooks#decoding-signed-webhooks} for more information.
   */
  signedCallbacks?: boolean;

  /**
   * Conversation TTL
   *
   * @remarks The length of time named conversations will remain active for after
   * creation, in hours. 0 means infinite. Maximum value is 744 (i.e., 31 days).
   */
  conversationsTTL?: number;

  /**
   * Region to round calls
   *
   * @remarks
   * Selecting a region means all inbound, programmable SIP and SIP connect
   * calls will be sent to the selected region unless the call is sent to a
   * regional endpoint. If the call is using a regional endpoint, this will
   * override the application setting.
   */
  region?: VoiceRegions | string;

  /**
   * Payment gateway configuration.
   */
  payments?: {
    /**
     * List of payment gateways.
     */
    gateways?: Array<unknown>;
  };
};
