/**
 * Represents an Audit Event.
 *
 * @typedef {Object} AuditEvent
 * @property {string} id - UUID of the audit event.
 * @property {AuditEventTypes | string} eventType - The type of the audit event.
 * @property {string} createdAt - The date when the audit event was created.
 * @property {string} [userEmail] - Email of the user whose account the audit event is associated with.
 * @property {string} [userId] - The ID of the user that the audit event is associated with.
 * @property {string} accountId - The API_KEY of the Vonage API account that the audit event is associated with.
 * @property {'CD' | 'DEVAPI'} source - The source of the event.
 * @property {'Customer Dashboard' | 'Developer API'} sourceDescription - Description of the audit event source.
 * @property {string} sourceCountry - ISO 3166-1 Alpha-2 country code recorded for the event.
 * @property {*} [context] - Additional context information for the audit event.
 */

export {};
