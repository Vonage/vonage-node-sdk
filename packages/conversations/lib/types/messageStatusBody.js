/**
 * @typedef {Object} MessageStatusBody
 * @property {string} [originalEventId] - The ID of the message.
 * @property {EventMessageType} [messageType] - Type of event
 * @property {'sms' | 'mms' | 'whatsapp' | 'viber' | 'messenger'} [channelType] - Channel type
 * @property {string} [from] - Member ID of the sender.
 * @property {string} [to] - Member ID of the recipient.
 * @property {string} [messageUUID] - The ID of the message.
 * @property {Record} [error] - Message error
 * @property {string} [text] - Message text
 * @property {Object} [image] - Image URL
 * @property {Object} [video] - Video URL
 * @property {Object} [audio] - Audio URL
 * @property {Object} [file] - File URL
 * @property {Object} [template] - Template variables
 * @property {Object} [whatsapp] - Whats App policy Whats App locale
 * @property {Record} [custom]
 * @property {Object} [vcard] - VCard URL
 * @property {Object} [location] - Latitude Longitude Location name Location address
 */

export {};
