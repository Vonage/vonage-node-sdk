/**
 * Represents a conversation
 *
 * @typedef {Object} Conversation
 * @property {string} [id] - The unique identifier for this conversation. @readonly
 * @property {string} [name] - Your internal conversation name. Must be unique.
 * @property {string} [displayName] - The public-facing name of the conversation.
 * @property {string} [imageUrl] - An image URL associated with the conversation.
 * @property {ConversationState} [status] - The conversation's status. @readonly
 * @property {number} [sequenceNumber] - The last Event ID in this conversation. This ID can be used to retrieve a specific event. @readonly
 * @property {ConversationState} [state] - The conversation's state.
 * @property {Object} [properties] - The conversation's properties The conversation's time to leave. After how many seconds the conversation is deleted. The conversation's type. The conversation's custom sort key. Custom key-value pairs to be included with the conversation.
 * @property {Object} [timestamp] - Timestamps for when the conversation was created, updated, and destroyed. @readonly The time the conversation was created. @readonly The time the conversation was last updated. @readonly The time the conversation was destroyed (if applicable). @readonly
 * @property {Array} [numbers] - Communication channels (optional). @remarks This is not set when fetching a converstion from the API.
 * @property {ConversationCallback} [callback] - Callback information (optional). @remarks This is not set when fetching a converstion from the API.
 */

export {};
