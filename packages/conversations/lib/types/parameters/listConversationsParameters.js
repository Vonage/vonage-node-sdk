/**
 * Represents the query parameters for listing conversations.
 *
 * @typedef {Object} ListConversationsParameters
 * @property {string} [dateStart] - Return the records that occurred after this point in time.
 * @property {string} [dateEnd] - Return the records that occurred before this point in time.
 * @property {number} [pageSize] - Return this amount of records in the response.
 * @property {'asc' | 'desc'} [order] - Return the records in ascending or descending order. Must be one of: 'asc', 'desc'.
 * @property {string} [cursor] - The cursor to start returning results from. You are not expected to provide this manually but to follow the URL provided in _links.next.href or _links.prev.href in the response which contains a cursor value. @remarks When using the generator from the client, this is handled for you.
 * @property {string} [byUser] - Return the records that were created by this user.
 * @property {boolean} [includeCustomData] - Include custom data for the conversation
 */

export {};
