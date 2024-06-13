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
   * - At least 8 characters and no more than 25 characters
   * - Contains at least 1 lower-case letter
   * - Contains at least 1 capital letter
   * - Contains at least 1 digit
   * - Must be unique
   *
   * If this parameter is not provided, a secret will be automatically generated and you can check it on the dashboard.
   */
  secret?: string;

  /**
   * Flag indicating whether to use the primary account balance (true) or not (false).
   */
  usePrimaryAccountBalance: boolean;
};
