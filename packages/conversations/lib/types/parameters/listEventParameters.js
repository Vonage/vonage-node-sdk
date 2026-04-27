/**
 * List Event Parameters
 *
 * @typedef {Object} ListEventParameters
 * @property {boolean} [excludeDeletedEvents] - Exclude deleted events.
 * @property {string} [startId] - The ID to start returning events at.
 * @property {string} [endId] - The ID to end returning events at.
 * @property {string} [eventType] - The type of event to search for. Does not currently support custom events.
 * @property {number} [pageSize] - Return this amount of records in the response.
 * @property {'asc' | 'desc'} [order] - Return the records in ascending or descending order. Must be one of: 'asc', 'desc'.
 * @property {string} [cursor] - The cursor to start returning results from. You are not expected to provide this manually, but to follow the URL provided in _links.next.href or _links.prev.href in the response which contains a cursor value.
 */

export {};
