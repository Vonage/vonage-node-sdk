import { APILinks } from '@vonage/server-client';
import { BalanceTransferResponse } from './balanceTransferResponse';

export type BalanceTransferPageResponse = {
  _embedded: {
    balance_transfers: Array<BalanceTransferResponse>;
  };
} & APILinks;
