/**
 * A context used for quoting/replying/reacting to a specific message in a
 * conversation. When used for quoting or replying, the WhatsApp UI will
 * display the new message along with a contextual bubble that displays the
 * quoted/replied to message's content. When used for reacting the WhatsApp
 * UI will display the reaction emoji below the reacted to message.
 *
 * @typedef {Object} WhatsAppContext
 * @property {string} messageUUID - The UUID of the message being replied to/quoted.
 */

/**
 * @typedef {Object} WhatsAppParams
 * @property {Channels.WHATSAPP | string} channel
 * @property {WhatsAppContext} [context] - A context used for quoting/replying/reacting to a specific message in a conversation. When used for quoting or replying, the WhatsApp UI will display the new message along with a contextual bubble that displays the quoted/replied to message's content. When used for reacting the WhatsApp UI will display the reaction emoji below the reacted to message.
 * @property {string} [category] - Send via MM Lite API only this is valid for marketing template messages only, and for Alpha release only @deprecated
 */

export {};
