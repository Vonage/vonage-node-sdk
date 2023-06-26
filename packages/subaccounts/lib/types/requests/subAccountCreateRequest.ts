import { SubAccountCreateParameters } from '../parameters/subAccountCreateParameters';

export type SubAccountCreateRequest = {
  use_primary_account_balance: boolean;
} & Omit<SubAccountCreateParameters, 'usePrimaryAccountBalance'>;
