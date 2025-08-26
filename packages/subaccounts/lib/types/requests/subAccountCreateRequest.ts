import { SubAccountCreateParameters } from '../parameters/index.js';

/**
 * Type definition for the request used to create a subaccount for a primary account.
 * It combines the `use_primary_account_balance` property with the properties from `SubAccountCreateParameters`
 * while omitting the `usePrimaryAccountBalance` property.
 */
export type SubAccountCreateRequest = {
  /**
   * Flag indicating whether to use the primary account balance (true) or not (false).
   */
  use_primary_account_balance: boolean;
} & Omit<SubAccountCreateParameters, 'usePrimaryAccountBalance'>;
