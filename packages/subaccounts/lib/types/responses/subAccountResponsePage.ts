import { SubAccountResponse } from './subAccountResponse';
import { AccountResponse } from './accountResponse';
import { APILinks } from '@vonage/server-client';

/**
 * Type definition for the response representing a page of subaccounts, which
 * includes properties such as `total_balance`, `total_credit_limit`,
 * `_embedded` with `primary_account`, `subaccounts`, and APILinks.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type SubAccountResponsePage = {
  /**
   * The total balance of the subaccounts.
   */
  total_balance: number;

  /**
   * The total credit limit of the subaccounts.
   */
  total_credit_limit: number;

  /**
   * An object containing the primary account information and an array of `subaccounts`.
   */
  _embedded: {
    primary_account: AccountResponse;
    subaccounts: Array<SubAccountResponse>;
  };
} & APILinks;
