/**
 * Represents a request to redact a specific message.
 *
 * @typedef {Object} TransactionRequest
 * @property {string} id - The transaction ID to redact.
 * @property {ProductType} product - Product name that the ID provided relates to. Must be one of: sms, voice, number-insight, verify, verify-sdk, messages.
 * @property {Type} type - Required if redacting SMS data. Must be one of: inbound, outbound.
 */

export {};
