import { SubAccountResponse } from './subAccountResponse';
import { AccountResponse } from './accountResponse';
import { APILinks } from '@vonage/server-client';

export type SubAccountResponsePage = {
  total_balance: number;
  total_credit_limit: number;
  _embedded: {
    primary_account: AccountResponse;
    subaccounts: Array<SubAccountResponse>;
  };
} & APILinks;
