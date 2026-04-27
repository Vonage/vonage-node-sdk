/**
 * Represents the response for creating a call, including the call's UUID, status, direction, and conversation UUID.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} CreateCallResponse
 * @property {string} uuid - The UUID of the created call.
 * @property {string} status - The status of the created call.
 * @property {string} direction - The direction of the call (e.g., "outbound" or "inbound").
 * @property {string} conversation_uuid - The UUID of the conversation associated with the call.
 */

export {};
