/**
 * Enum representing the reachability status of a phone number.
 */
export enum Reachable {
  /**
   * The reachability status is unknown.
   */
  UNKNOWN = 'unknown',

  /**
   * The phone number is reachable.
   */
  REACHABLE = 'reachable',

  /**
   * The phone number is undeliverable.
   */
  UNDELIVERABLE = 'undeliverable',

  /**
   * The phone number's owner is absent.
   */
  ABSENT = 'absent',

  /**
   * The phone number is invalid or a bad number.
   */
  BAD_NUMBER = 'bad_number',

  /**
   * The phone number is blacklisted.
   */
  BLACKLISTED = 'blacklisted',
}
