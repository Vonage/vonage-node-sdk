
export type MatchType = {

  /**
   * Id number associated to the official identity document in the country
   */
  idDocument: string;

  /**
   * Complete name of the customer
   */
  name: string;

  /**
   * First/given name or compound first/given name of the customer.
   */
  givenName: string;

  /**
   * Last name, family name, or surname of the customer.
   */
  familyName: string;

  /**
   * Complete address of the customer
   */
  address: string;

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

};

