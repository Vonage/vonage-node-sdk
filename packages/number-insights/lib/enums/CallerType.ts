/**
 * Enum representing the type of caller for a phone number.
 * @enum {string}
 */
export enum CallerType {
  /**
   * The value will be "unknown" if the information about the caller type is not available.
   */
  UNKNOWN = 'unknown',

  /**
   * The value will be "business" if the owner of a phone number is a business.
   */
  BUSINESS = 'business',

  /**
   * The value will be "consumer" if the owner of a phone number is an individual.
   */
  CONSUMER = 'consumer',
}
