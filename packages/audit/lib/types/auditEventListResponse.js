/**
 * Represents the response containing a list of audit events.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @typedef {Object} AuditEventListResponse
 * @property {Object} [_embedded] - An object containing an array of audit events.
 * @property {APILinks} _links - Links associated with the API response.
 * @property {AuditEventPage} page - Information about the pagination and page details.
 */

export {};
