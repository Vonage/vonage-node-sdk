/**
 * Represents the result of the format insight.
 *
 * @typedef {Object} Format
 * @property {StatusType} status - The status of the insight call.
 * @property {string} [countryCode] - The country that phone number is associated with. This is in ISO 3166-1 alpha-2 format.
 * @property {string} [countryName] - The full name of the country where the phone number is registered.
 * @property {string} [countryPrefix] - The numeric prefix for the country where the phone number is registered.
 * @property {string} [offlineLocation] - The location where the number was originally assigned, based on its prefix
 * @property {Array.<string>} [timeZones] - List of time zones corresponding to the offline_location field
 * @property {string} [numberInternational] - The phone number from your request, formatted in international E.164 format.
 * @property {string} [numberNational] - The phone_number from your request, formatted according to the local convention of the country it belongs to.
 * @property {boolean} [isFormatValid] - Phone number format validation involves verifying the length and prefix details at various levels
 */

export {};
