import { AccountResponse } from './accountResponse.js';

/**
 * Type definition for the response representing a subaccount, which includes
 * properties such as `primary_account_api_key` and
 * `use_primary_account_balance`. This type combines properties from the
 * subaccount response with the properties of an `AccountResponse`.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type SubAccountResponse = {
  /**
   * The API key associated with the primary account.
   */
  primary_account_api_key: string;

  /**
   * Flag indicating whether to use the primary account balance (true) or not (false).
   */
  use_primary_account_balance: boolean;
} & AccountResponse;
