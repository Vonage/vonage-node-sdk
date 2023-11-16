/**
 * Type definition for parameters used to create a subaccount for a primary account.
 */
export type SubAccountCreateParameters = {
  /**
   * Name of the subaccount.
   */
  name: string;

  /**
   * API secret of the subaccount.
   */
  secret: string;

  /**
   * Flag indicating whether to use the primary account balance (true) or not (false).
   */
  usePrimaryAccountBalance: boolean;
};
