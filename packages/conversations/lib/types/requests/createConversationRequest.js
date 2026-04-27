/**
 * Type representing a request to create a conversation.
 *
 * @typedef {Object} CreateConversationRequest
 * @property {string} name - Your internal conversation name.
 * @property {string} display_name - The public-facing name of the conversation.
 * @property {string} image_url - An image URL associated with the conversation.
 * @property {Object} [properties] - Conversation properties (optional). Time to leave in seconds for an empty conversation (optional). Custom conversation type (optional). Custom sort key (optional). Custom data as key-value pairs (optional).
 * @property {Array} [numbers] - Communication channels (optional).
 * @property {ConversationCallbackRequest} [callback] - Callback information (optional).
 */

export {};
