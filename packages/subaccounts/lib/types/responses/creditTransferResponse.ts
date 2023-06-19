import { CreditTransfer } from '../creditTransfer';

export type CreditTransferResponse = {
  credit_transfer_id: string;
  created_at: string;
} & Omit<CreditTransfer, 'creditTransferId' | 'createdAt'>;
