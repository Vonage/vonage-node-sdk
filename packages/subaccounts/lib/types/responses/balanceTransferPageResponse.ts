import { APILinks } from '@vonage/server-client';
import { BalanceTransferResponse } from './balanceTransferResponse';

/**
 * Type definition for the response representing a page of balance transfers,
 * which includes an array of `balance_transfers` and APILinks.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type BalanceTransferPageResponse = {
  /**
   * An object containing an array of `balance_transfers`.
   */
  _embedded: {
    balance_transfers: Array<BalanceTransferResponse>;
  };
} & APILinks;
