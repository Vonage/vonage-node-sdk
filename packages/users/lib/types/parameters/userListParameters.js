/**
 * Parameters for listing users.
 *
 * @typedef {Object} UserListParameters
 * @property {number} [pageSize] - The number of records to return in the response. Minimum: 1, Maximum: 100, Default: 10. Example: 10
 * @property {SortOrder} [order] - The sorting order for the records. Must be one of: 'ASC' (Ascending) or 'DESC' (Descending).
 * @property {string} [cursor] - The cursor to start returning results from. You are not expected to provide this manually, but to follow the URL provided in _links.next.href or _links.prev.href in the response which contains a cursor value.
 * @property {string} [name] - Unique name for a user. Example: 'my_user_name'.
 */

export {};
