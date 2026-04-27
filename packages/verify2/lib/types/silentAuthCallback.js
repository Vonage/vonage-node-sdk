/**
 * Represents a callback received for Silent Authentication.
 *
 * @typedef {Object} SilentAuthCallback
 * @property {string} request_id - The ID of the Silent Authentication request associated with the callback.
 * @property {string} triggered_at - The date and time when the Silent Authentication event was triggered in ISO 8601 format.
 * @property {string} type - The type of response for the Silent Authentication event.
 * @property {SilentAuthChannel.SILENT_AUTH} channel - The communication channel for Silent Authentication (always 'silent_auth').
 * @property {SilentAuthStatus} status - The status of the Silent Authentication event.
 * @property {Object} action - Information about the action in the Silent Authentication event. The type of action, which is 'check' for Silent Authentication. The URL for Silent Authentication Verify workflow completion.
 */

export {};
