/**
 * Represents the result of the subscriber match insights.
 *
 * @typedef {Object} SubscriberMatch
 * @property {SubscriberMatchStatusType} status - The status of the insight call.
 * @property {Match} [idDocumentMatch] - Id number associated to the ID document of the customer matches with the one on the Operator's system.
 * @property {Match} [givenNameMatch] - The first name/given name of the customer matches with the one on the Operator's system.
 * @property {Match} [familyNameMatch] - The last name/ family name/ surname of the customer matches with the one on the Operator's system.
 * @property {Match} [addressMatch] - The complete address of the customer matches with the one on the Operator's system.
 * @property {Match | MatchAddress | string} [streetNameMatch] - The street name of the customer matches with the one on the Operator's system.
 * @property {Match | MatchAddress | string} [streetNumberMatch] - The street number of the customer matches with the one on the Operator's system.
 * @property {Match | MatchAddress | string} [postalCodeMatch] - The postal code / zip code of the customer matches with the one on the Operator's system.
 * @property {Match | MatchAddress | string} [localityMatch] - The locality of the customer's address matches with the one on the Operator's system.
 * @property {Match | MatchAddress | string} [regionMatch] - The region of the customer's address matches with the one on the Operator's system.
 * @property {Match | MatchAddress | string} [countryMatch] - The country of the customer's address matches with the one on the Operator's system.
 * @property {Match | MatchAddress | string} [houseNumberExtensionMatch] - The house number extension of the customer's address with the one on the Operator's system.
 * @property {Match} [birthdateMatch] - The birthdate of the customer matches with the one on the Operator's system.
 */

export {};
