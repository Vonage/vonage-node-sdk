/**
 * Represents an Audit Event.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @typedef {Object} AuditEventResponse
 * @property {AuditEventTypes | string} event_type - The type of the audit event.
 * @property {string} created_at - The date when the audit event was created.
 * @property {string} [user_email] - Email of the user whose account the audit event is associated with.
 * @property {string} [user_id] - The ID of the user that the audit event is associated with.
 * @property {string} account_id - The API_KEY of the Vonage API account that the audit event is associated with.
 * @property {Pick} source_description - Description of the audit event source.
 * @property {string} source_country - ISO 3166-1 Alpha-2 country code recorded for the event.
 */

export {};
