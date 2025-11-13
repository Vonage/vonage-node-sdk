import { SubscriberMatchStatusType } from './status.js';
import { Match, MatchAddress } from '../enums/match.js';

/**
 * Represents the result of the subscriber match insights.
 */
export type SubscriberMatch = {

  /**
   * The status of the insight call.
   */
  status: SubscriberMatchStatusType;


  /**
   * Id number associated to the ID document of the customer matches
   * with the one on the Operator's system.
   */
  idDocumentMatch?: Match;


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
  streetNameMatch?: Match | MatchAddress | string;


  /**
   * The street number of the customer matches with the one on the Operator's system.
   */
  streetNumberMatch?: Match | MatchAddress | string;


  /**
   * The postal code / zip code of the customer matches with the one on the Operator's system.
   */
  postalCodeMatch?: Match | MatchAddress | string;


  /**
   * The locality of the customer's address matches with the one on the Operator's system.
   */
  localityMatch?: Match | MatchAddress | string;


  /**
   * The region of the customer's address matches with the one on the Operator's system.
   */
  regionMatch?: Match | MatchAddress | string;


  /**
   * The country of the customer's address matches with the one on the Operator's system.
   */
  countryMatch?: Match | MatchAddress | string;


  /**
   * The house number extension of the customer's address with the one on the Operator's system.
   */
  houseNumberExtensionMatch?: Match | MatchAddress | string;


  /**
   * The birthdate of the customer matches with the one on the Operator's system.
   */
  birthdateMatch?: Match;

};
