import { Account } from './account.js';

/**
 * Type definition representing a subaccount, which includes properties such
 * as `primaryAccountApiKey` and `usePrimaryAccountBalance`, in addition to
 * properties from the `Account` type.
 */
export type SubAccount = {
  /**
   * The API key associated with the primary account.
   */
  primaryAccountApiKey: string;

  /**
   * Flag indicating whether to use the primary account balance (true) or not (false).
   */
  usePrimaryAccountBalance: boolean;
} & Account;
