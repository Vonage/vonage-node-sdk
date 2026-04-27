/**
 * Represents the response for a Verify search operation.
 *
 * @typedef {Object} VerifySearchResponse
 * @property {string} request_id - The unique identifier for the Verify request.
 * @property {string} account_id - The account ID associated with the request.
 * @property {SearchStatus} status - The status code indicating the outcome of the search operation.
 * @property {string} number - The phone number this verification request was used for.
 * @property {string} price - The cost incurred for this verification request.
 * @property {string} currency - The currency code.
 * @property {string} sender_id - The sender ID provided in the Verify request.
 * @property {string} date_submitted - The date and time the verification request was submitted.
 * @property {string} date_finalized - The date and time the verification request was completed.
 * @property {string} first_event_date - The time the first verification attempt was made.
 * @property {string} last_event_date - The time the last verification attempt was made.
 * @property {Array.<SearchCheckInformationResponse>} checks - The list of checks made for this verification and their outcomes.
 * @property {Array.<SearchEventInformationResponse>} events - The events that have taken place to verify this number, and their unique identifiers.
 * @property {string} estimated_price_messages_sent - The estimated cost of messages sent for the verification process.
 */

export {};
