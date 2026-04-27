/**
 * Represents the response for a Verify search operation.
 *
 * @typedef {Object} VerifySearch
 * @property {string} requestId - The unique identifier for the Verify request.
 * @property {string} accountId - The Vonage account ID associated with the request.
 * @property {string} senderId - The sender ID provided in the Verify request.
 * @property {string} dateSubmitted - The date and time the verification request was submitted in the format 'YYYY-MM-DD HH:MM:SS'.
 * @property {string} dateFinalized - The date and time the verification request was completed in the format 'YYYY-MM-DD HH:MM:SS'.
 * @property {string} [firstEventDate] - (Optional) The time the first verification attempt was made in the format 'YYYY-MM-DD HH:MM:SS'.
 * @property {string} [lastEventDate] - (Optional) The time the last verification attempt was made in the format 'YYYY-MM-DD HH:MM:SS'.
 * @property {Array.<VerifySearchCheck>} checks - The list of verification checks made for this verification and their outcomes.
 * @property {string} estimatedPriceMessagesSent - The estimated cost of messages sent during the verification process.
 */

export {};
