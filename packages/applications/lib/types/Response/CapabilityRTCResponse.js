/**
 * Represents the response for RTC-related capabilities configuration.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @typedef {Object} CapabilityRTCResponse
 * @property {Object} webhooks - Webhook configuration for RTC events. Webhook for events related to RTC.
 * @property {boolean} signed_callbacks - Whether to use signed webhooks for RTC events.
 * @property {number} leg_persistence_time - The leg persistence time for RTC events.
 */

export {};
