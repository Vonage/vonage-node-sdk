/**
 * Vonage numbers that are linked to Vonage applications will use the answer_url
 * to retrieve an NCCO
 *
 * @typedef {Object} AnswerCallbackUrl
 * @property {number} [socketTimeout] - Socket timeout in milliseconds.
 * @property {number} [connectTimeout] - Connection timeout in milliseconds.
 */

/**
 * Vonage numbers that are linked to Vonage applications will use the answer_url
 * to retrieve an NCCO, and the event url to send call status information to you
 *
 * @typedef {Object} EventCallbackUrl
 * @property {number} [socketTimeout] - Socket timeout in milliseconds.
 * @property {number} [connectTimeout] - Connection timeout in milliseconds.
 */

/**
 * The fallback answer url can optionally be configured. This is used when
 * answer url is offline or returning an HTTP error code.
 *
 * @typedef {Object} FallbackAnswerUrl
 * @property {number} [socketTimeout] - Socket timeout in milliseconds.
 * @property {number} [connectTimeout] - Connection timeout in milliseconds.
 */

/**
 * Represents the voice-related capabilities configuration for an application.
 *
 * @typedef {Object} CapabilityVoice
 * @property {Object} [webhooks] - Webhook configuration for voice events. Webhook for events related to voice calls. Webhook for voice call answer events. Webhook for fallback voice call answer events.
 * @property {boolean} [paymentEnabled] - Indicates whether payment is enabled.
 * @property {boolean} [signedCallbacks] - Whether to use signed webhooks for voice events. @remarks Refer to {@link https://developer.vonage.com/en/getting-started/concepts/webhooks#decoding-signed-webhooks} for more information.
 * @property {number} [conversationsTTL] - Conversation TTL @remarks The length of time named conversations will remain active for after creation, in hours. 0 means infinite. Maximum value is 744 (i.e., 31 days).
 * @property {VoiceRegions | string} [region] - Region to round calls @remarks Selecting a region means all inbound, programmable SIP and SIP connect calls will be sent to the selected region unless the call is sent to a regional endpoint. If the call is using a regional endpoint, this will override the application setting.
 * @property {Object} [payments] - Payment gateway configuration. List of payment gateways.
 */

export {};
