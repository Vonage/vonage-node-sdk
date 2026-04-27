/**
 * Event URL configuration response
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @typedef {Object} EventUrlResponse
 * @property {number} [socketTimeout] - Socket timeout in milliseconds.
 * @property {number} [connectTimeout] - Connection timeout in milliseconds.
 */

/**
 * Answer URL configuration response
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @typedef {Object} AnswerUrlResponse
 * @property {number} [socket_timeout] - Socket timeout in milliseconds.
 * @property {number} [connect_timeout] - Connection timeout in milliseconds.
 */

/**
 * Fallback URL configuration response
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @typedef {Object} FallbackAnswerUrlResponse
 * @property {number} [socket_timeout] - Socket timeout in milliseconds.
 * @property {number} [connect_timeout] - Connection timeout in milliseconds.
 */

/**
 * Represents the response for voice-related capabilities configuration.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @typedef {Object} CapabilityVoiceResponse
 * @property {Object} webhooks - Webhook configuration for voice events. Webhook for events related to voice calls. Webhook for voice call answer events. Webhook for fallback voice call answer events.
 * @property {boolean} payment_enabled - Indicates whether payment is enabled.
 * @property {boolean} signed_callbacks - Whether to use signed webhooks for voice events. Refer to [the Webhooks documentation](https://developer.vonage.com/en/getting-started/concepts/webhooks#decoding-signed-webhooks) for more information.
 * @property {number} conversations_ttl - The length of time named conversations will remain active for after creation, in hours. 0 means infinite. Maximum value is 744 (i.e., 31 days).
 */

export {};
