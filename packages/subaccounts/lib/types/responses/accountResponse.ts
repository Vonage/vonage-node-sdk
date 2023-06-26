import { SubAccount } from '../subAccount';

export type AccountResponse = {
  api_key: string;
  created_at: string;
  balance: number;
  credit_limit: number;
} & Omit<
  SubAccount,
  | 'apiKey'
  | 'primaryAccountApiKey'
  | 'usePrimaryAccountBalance'
  | 'createdAt'
  | 'creditLimit'
>;
