/**
 * Represents the parameters for a message.
 *
 * @typedef {Object} MessageParams
 * @property {MessageTypes | string} messageType - The type of message to send.
 * @property {Channels | string} channel - The channel to sent the message through
 * @property {string} to - The ID of the message recipient.
 * @property {string} from - The ID of the message sender.
 * @property {string} [clientRef] - Client reference of up to 100 characters. The reference will be present in every message status.
 * @property {string} [webhookUrl] - Specifies the URL to which Status Webhook messages will be sent for this particular message. Over-rides account-level and application-level Status Webhook url settings on a per-message basis.
 * @property {'v0.1' | 'v1'} [webhookVersion] - Specifies which version of the Messages API will be used to send Status Webhook messages for this particular message. For example, if v0.1 is set, then the JSON body of Status Webhook messages for this message will be sent in Messages v0.1 format. Over-rides account-level and application-level API version settings on a per-message basis.
 * @property {boolean} [trustedRecipient] - Setting this parameter to true overrides, on a per-message basis, any protections set up via Fraud Defender (Traffic Rules, SMS Burst Protection, AIT Protection). This parameter only has any effect for accounts subscribed to Fraud Defender Premium.
 */

export {};
