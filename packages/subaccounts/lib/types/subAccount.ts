import { Account } from './account';

export type SubAccount = {
  primaryAccountApiKey: string;
  usePrimaryAccountBalance: boolean;
} & Account;
