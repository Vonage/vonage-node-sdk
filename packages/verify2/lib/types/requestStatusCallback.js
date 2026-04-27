/**
 * Represents a callback received for the status update of a
 * verification request.
 *
 * @typedef {Object} RequestStatusCallback
 * @property {string} request_id - The ID of the verification request associated with the callback.
 * @property {string} submitted_at - The date and time when the verification request was submitted in ISO 8601 format.
 * @property {RequestStatus} status - The status of the verification request.
 * @property {string} type - The type of response for the callback.
 * @property {number} channel_timeout - The number of seconds before the current step in the verification request times out.
 * @property {Array} workflow - An array of workflow details for the verification request.
 */

export {};
