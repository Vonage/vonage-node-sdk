import { CreditTransferResponse } from './creditTransferResponse';

export type CreditTransferResponsePage = {
  _embedded: {
    credit_transfers: Array<CreditTransferResponse>;
  };
};
