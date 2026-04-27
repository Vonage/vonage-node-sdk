/**
 * Represents the response for messages-related capabilities configuration.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @typedef {Object} CapabilityMessagesResponse
 * @property {Object} webhooks - Webhook configuration for messages-related events. Webhook for inbound messages. Webhook for events related to message status.
 * @property {boolean} authenticate_inbound_media - Whether to authenticate inbound media for messages.
 */

export {};
