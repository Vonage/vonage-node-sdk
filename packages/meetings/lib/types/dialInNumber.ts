/**
 * Represents a dial-in number with associated information.
 */
export type DialInNumber = {
  /**
   * The phone number for dialing in.
   */
  number: string;

  /**
   * The locale or region associated with the dial-in number.
   */
  locale: string;

  /**
   * The display name or label for the dial-in number.
   */
  displayName: string;
};
