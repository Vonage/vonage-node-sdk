/**
 * Interface representing a delivery receipt for an SMS message.
 * Describes the structure of a delivery receipt containing information about the message's delivery status.
 *
 * @typedef {Object} DeliveryReceipt
 * @property {string} [msisdn] - The recipient's phone number in E.164 format (optional).
 * @property {string} [to] - The SenderID set in the 'from' field of the request (optional).
 * @property {string} [networkCode] - The Mobile Country Code Mobile Network Code (MCCMNC) of the carrier (optional).
 * @property {string} [messageId] - The Vonage ID for this message (optional).
 * @property {string} [price] - The cost of the message (optional).
 * @property {string} [status] - A code explaining the message's delivery status (optional).
 * @property {string} [scts] - When the Delivery Receipt was received from the carrier in YYMMDDHHMM format (optional).
 * @property {string} [errCode] - The status of the request (optional).
 * @property {string} [apiKey] - The API key that sent the SMS (optional).
 * @property {string} [clientRef] - Your client reference for the message (optional).
 * @property {string} [messageTimestamp] - The time when Vonage started to push this Delivery Receipt to your webhook endpoint (optional).
 * @property {string} [timestamp] - A Unix timestamp representation of 'messageTimestamp' (optional).
 * @property {string} [nonce] - A random string forming part of the signed set of parameters for validation (optional).
 * @property {string} [sig] - The hash of the request parameters, a timestamp, and the signature secret (optional).
 */

export {};
