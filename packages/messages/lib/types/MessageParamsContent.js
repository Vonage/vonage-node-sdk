/**
 * @typedef {Object} MessageContentObject
 * @property {'image' | 'audio' | 'video' | 'vcard' | 'file'} type - The type of attachment.
 * @property {string} url - The URL of the attachment.
 * @property {string} [content] - Additional text to accompany the attachment.
 */

/**
 * Represents the parameters for a message with an content attachment.
 *
 * @typedef {Object} MessageParamsContent
 * @property {MessageTypes.CONTENT | string} messageType
 */

export {};
