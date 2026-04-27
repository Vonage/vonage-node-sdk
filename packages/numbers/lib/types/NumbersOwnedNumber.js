/**
 * Represents an owned phone number with its details.
 *
 * @typedef {Object} NumbersOwnedNumber
 * @property {Country} [country] - The two-character country code in ISO 3166-1 alpha-2 format. Example: "US" for the United States.
 * @property {string} [msisdn] - The owned phone number. Example: "447700900000".
 * @property {string} [moHttpUrl] - The URL of the webhook endpoint that handles inbound messages for the number. Example: "https://example.com/webhooks/inbound-sms".
 * @property {LineType} [type] - The type of phone number. Example: "mobile-lvn" or "landline".
 * @property {Array.<Feature>} [features] - The capabilities/features of the phone number, such as SMS, VOICE, or MMS. Example: ["SMS", "VOICE"].
 * @property {string} [voiceCallbackType] - The type of voice callback for the number. Example: "app" or "sip".
 * @property {string} [voiceCallbackValue] - The value associated with the voice callback. Example: "aaaaaaaa-bbbb-cccc-dddd-0123456789ab".
 * @property {string} [messagesCallbackType] - The type of messages callback for the number. Example: "app".
 * @property {string} [messagesCallbackValue] - The value associated with the messages callback. Example: "aaaaaaaa-bbbb-cccc-dddd-0123456789ab".
 */

export {};
