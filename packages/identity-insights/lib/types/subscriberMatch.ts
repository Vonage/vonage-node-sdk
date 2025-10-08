import { StatusType } from './status.js';
import { Match } from '../enums/match.js';

/**
 * Represents the result of the subscriber match insights.
 */
export type SubscriberMatch = {

  /**
   * The status of the insight call.
   */
  status: StatusType;


  /**
   * Id number associated to the ID document of the customer matches
   * with the one on the Operator's system.
   */
  idDocumentMatch?: Match;


  /**
   * The complete name of the customer matches with the one on the
   * Operator's system.
   */
  nameMatch?: Match;

  /**
   * The first name/given name of the customer matches with the one on the
   * Operator's system.
   */
  givenNameMatch?: Match;


  /**
   * The last name/ family name/ surname of the customer matches with the
   * one on the Operator's system.
   */
  familyNameMatch?: Match;

  /**
   * The complete address of the customer matches with the one on the
   * Operator's system.
   */
  addressMatch?: Match;

  /**
   * The street name of the customer matches with the one on the Operator's system.
   */
  streetNameMatch?: Match;

  /**
   * The street number of the customer matches with the one on the Operator's system.
   */
  streetNumberMatch?: Match;

  /**
   * The postal code / zip code of the customer matches with the one on the Operator's system.
   */
  postalCodeMatch?: Match;

  /**
   * The locality of the customer's address matches with the one on the Operator's system.
   */
  localityMatch?: Match;

  /**
   * The country of the customer's address matches with the one on the Operator's system.
   */
  countryMatch?: Match;

  /**
   * The house number extension of the customer's address with the one on the Operator's system.
   */
  houseNumberExtensionMatch?: Match;

  /**
   * The birthdate of the customer matches with the one on the Operator's system.
   */
  birthdateMatch?: Match;

};
