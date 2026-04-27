/**
 * Represents parameters for updating phone number settings.
 *
 * @typedef {Object} NumbersQueryUpdateParams
 * @property {Country} country - The two-character country code in ISO 3166-1 alpha-2 format. Example: "US" for the United States.
 * @property {string} msisdn - The phone number. Example: "447700900000".
 * @property {string} [app_id] - An Application ID. Example: "aaaaaaaa-bbbb-cccc-dddd-0123456789ab".
 * @property {string} [moHttpUrl] - The HTTP URL for handling MO (Mobile Originated) messages.
 * @property {string} [moSmppSysType] - The SMPP system type for MO (Mobile Originated) messages.
 * @property {VoiceCallbackTypeEnum} [voiceCallbackType] - The voice callback type.
 * @property {string} [voiceCallbackValue] - The voice callback value.
 * @property {string} [voiceStatusCallback] - The voice status callback URL.
 * @property {MessagesCallbackTypeEnum} [messagesCallbackType] - The messages callback type. @deprecated
 * @property {string} [messagesCallbackValue] - The messages callback value. @deprecated
 */

export {};
