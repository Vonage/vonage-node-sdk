import { AccountResponse } from './accountResponse';

export type SubAccountResponse = {
  primary_account_api_key: string;
  use_primary_account_balance: boolean;
} & AccountResponse;
