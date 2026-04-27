/**
 * Represents a request for sending a sticker message via the WhatsApp channel using a sticker URL.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} WhatsAppStickerUrlRequest
 * @property {string} client_ref - A client-defined reference string for the message.
 * @property {'sticker'} message_type - The type of the message, which is 'sticker' for a sticker message.
 * @property {Object} sticker - The sticker content of the message, including the sticker URL. The URL of the sticker to be sent.
 * @property {string} to - The recipient's identifier.
 * @property {string} from - The sender's identifier.
 * @property {'whatsapp'} channel - The channel through which the message will be sent, which is 'whatsapp' for WhatsApp.
 */

export {};
