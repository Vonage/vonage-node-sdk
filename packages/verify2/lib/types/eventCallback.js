/**
 * Represents an event callback received for a verification request.
 *
 * @typedef {Object} EventCallback
 * @property {string} request_id - The ID of the verification request associated with the event.
 * @property {string} triggered_at - The date and time when the event was triggered in ISO 8601 format.
 * @property {string} type - The type of response for the event.
 * @property {Channels} channel - The communication channel for the verification request.
 * @property {EventStatus} status - The status of the event.
 * @property {string} finalized_at - The date and time when the verification request was completed in ISO 8601 format.
 * @property {string} [client_ref] - (Optional) The client reference given in the original Verify request.
 */

export {};
