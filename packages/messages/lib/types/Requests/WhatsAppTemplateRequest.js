/**
 * Represents a request for sending a template message via the WhatsApp channel.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} WhatsAppTemplateRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'template'} message_type - The type of the message, which is 'template' for a template message.
 * @property {WhatsAppTemplateType} template - The template content of the message, including the template type.
 * @property {string} to - The recipient's identifier.
 * @property {string} from - The sender's identifier.
 * @property {'whatsapp'} channel - The channel through which the message will be sent, which is 'whatsapp' for WhatsApp.
 * @property {WhatsAppPolicyType} whatsapp - The policy and locale settings for sending the WhatsApp template message.
 */

export {};
