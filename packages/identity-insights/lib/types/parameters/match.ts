export type MatchType = {
  /**
   * Id number associated to the official identity document in the country
   */
  idDocument: string;

  /**
   * First/given name or compound first/given name of the customer.
   */
  givenName: string;

  /**
   * Last name, family name, or surname of the customer.
   */
  familyName: string;

  /**
   * Name of the street of the customer's address.
   */
  streetName: string;

  /**
   * The street number of the customer's address
   */
  streetNumber: string;

  /**
   * Zip code or postal code
   */
  postalCode: string;

  /**
   * Locality of the customer's address
   */
  locality: string;

  /**
   * Region of the customer's address
   */
  region: string;

  /**
   * Country of the customer's address
   */
  country: string;

  /**
   * House number extension of the customer's address
   */
  houseNumberExtension: string;

  /**
   * Birthdate of the customer
   */
  birthdate: string;
};
