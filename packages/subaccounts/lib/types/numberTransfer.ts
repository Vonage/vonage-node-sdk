/**
 * Type definition representing a number transfer, which includes properties such as `number`, `country`, `from`, and `to`.
 */
export type NumberTransfer = {
  /**
   * The number being transferred.
   */
  number: string;

  /**
   * The two-character country code in ISO 3166-1 alpha-2 format.
   */
  country: string;

  /**
   * The source account from which the number is transferred.
   */
  from: string;

  /**
   * The destination account to which the number is transferred.
   */
  to: string;
};
