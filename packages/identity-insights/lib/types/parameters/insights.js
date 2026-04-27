/**
 * Represents the parameters for makeing an identity insights call
 *
 * @typedef {Object} IdentityInsightsParameters
 * @property {string} phone_number - A single phone number that you need insight about in the E.164 format. Don't use a leading + or 00 when entering a phone number, start with the country code, e.g., 447700900000.
 * @property {'FraudPreventionAndDetection'} purpose - Specifies the reason for the request. This property is required only for Insights that use the Network Registry. The value must be "FraudPreventionAndDetection".
 * @property {Object} [insights] - The insight(s) you need. At least one insight must be requested. Verify whether the phone number is correctly structured Provide information about the carrier and network type originally associated with the phone number Identify the mobile network operator that is currently assigned for the given phone number Determine if the SIM card linked to the given phone number has recently changed Verify the location of an end-user device within a specified area Compare user data against the mobile network operator’s records. Check the roaming status and country on a mobile network Check connectivity status
 */

export {};
