import { SubAccount } from '../subAccount.js';

/**
 * Type definition for the response representing an account, which includes
 * properties such as `api_key`, `created_at`, `balance`, and `credit_limit`.
 * This type combines properties from the account response with the properties
 * of a subaccount (excluding specific subaccount-related properties).
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type AccountResponse = {
  /**
   * The API key associated with the account.
   */
  api_key: string;

  /**
   * The creation date and time of the account.
   */
  created_at: string;

  /**
   * The balance of the account.
   */
  balance: number;

  /**
   * The credit limit of the account.
   */
  credit_limit: number;
} & Omit<
  SubAccount,
  | 'apiKey'
  | 'primaryAccountApiKey'
  | 'usePrimaryAccountBalance'
  | 'createdAt'
  | 'creditLimit'
>;
