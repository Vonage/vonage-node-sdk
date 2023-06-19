import { BalanceTransfer } from '../balanceTransfer';

export type BalanceTransferResponse = {
  balance_transfer_id: string;
  created_at: string;
} & Omit<BalanceTransfer, 'balanceTransferId' | 'createdAt'>;
