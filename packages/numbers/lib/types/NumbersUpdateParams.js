/**
 * Represents parameters for updating phone numbers.
 *
 * @typedef {Object} NumbersUpdateParams
 * @property {Country} country - The two-character country code in ISO 3166-1 alpha-2 format. Example: "US" for the United States.
 * @property {string} msisdn - The phone number in E.164 format. Example: "+1234567890".
 * @property {string} [applicationId] - The application ID associated with the phone number. @deprecated Please use app_id
 * @property {string} [appId] - The application ID associated with the phone number.
 * @property {string} [moHttpUrl] - The URL of the webhook endpoint that handles inbound messages.
 * @property {string} [moSmppSysType] - The system type for SMPP MO messages.
 * @property {VoiceCallbackTypeEnum} [voiceCallbackType] - The type of voice callback: "sip", "tel", or "app".
 * @property {string} [voiceCallbackValue] - The value for voice callback.
 * @property {string} [voiceStatusCallback] - The URL of the voice status callback.
 * @property {MessagesCallbackTypeEnum} [messagesCallbackType] - The type of messages callback: "app". @deprecated Use voiceCallbackType instead.
 * @property {string} [messagesCallbackValue] - The value for messages callback. @deprecated Use voiceCallbackValue instead.
 */

export {};
