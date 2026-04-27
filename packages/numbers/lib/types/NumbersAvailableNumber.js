/**
 * Represents an available phone number with its details.
 *
 * @typedef {Object} NumbersAvailableNumber
 * @property {Country} [country] - The two-character country code in ISO 3166-1 alpha-2 format. Example: "US" for the United States.
 * @property {string} [msisdn] - An available inbound virtual phone number. Example: "447700900000".
 * @property {LineType} [type] - The type of phone number. Example: "mobile-lvn" or "landline".
 * @property {string} [cost] - The cost associated with the phone number. Example: "$10.00".
 * @property {Array.<Feature>} [features] - The capabilities/features of the phone number, such as SMS, VOICE, or MMS. Example: ["SMS", "VOICE"].
 */

export {};
