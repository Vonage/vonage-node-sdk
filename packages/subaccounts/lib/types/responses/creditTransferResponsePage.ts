import { CreditTransferResponse } from './creditTransferResponse';

/**
 * Type definition for the response representing a page of credit transfers,
 * which includes an array of `credit_transfers`.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type CreditTransferResponsePage = {
  /**
   * An object containing an array of `credit_transfers`.
   */
  _embedded: {
    credit_transfers: Array<CreditTransferResponse>;
  };
};
