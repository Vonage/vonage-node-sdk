/**
 * Represents a conversation as it is returned from the API.
 *
 * @typedef {Object} ConversationResponse
 * @property {string} [display_name] - The public-facing name of the conversation.
 * @property {string} [image_url] - An image URL associated with the conversation.
 * @property {number} sequence_number - The last Event ID in this conversation. This ID can be used to retrieve a specific event.
 * @property {Object} [properties] - The conversation's properties The conversation's time to leave. After how many seconds the conversation is deleted. The conversation's type. The conversation's custom sort key. Custom key-value pairs to be included with the conversation.
 */

export {};
