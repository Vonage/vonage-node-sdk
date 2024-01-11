/**
 * Enum representing the validity status of a phone number.
 */
export enum ValidNumber {
  /**
   * The validity status is unknown.
   */
  UNKNOWN = 'unknown',

  /**
   * The phone number is valid.
   */
  VALID = 'valid',

  /**
   * The phone number is not valid.
   */
  NOT_VALID = 'not_valid',

  /**
   * The validity of the phone number is inferred.
   */
  INFERRED = 'inferred',

  /**
   * The inferred validity of the phone number is not valid.
   */
  INFERRED_NOT_VALID = 'inferred_not_valid',
}
