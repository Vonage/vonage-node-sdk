import { BalanceTransfer } from '../balanceTransfer';

/**
 * Type definition for the response representing a balance transfer, which includes properties such as `balance_transfer_id` and `created_at`.
 * This type combines properties from the balance transfer response with the properties of a `BalanceTransfer` (excluding specific properties).
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the pure response before the client will transform the keys into `camelCase`.
 */
export type BalanceTransferResponse = {
  /**
   * The unique identifier for the balance transfer.
   */
  balance_transfer_id: string;

  /**
   * The date and time when the balance transfer was executed.
   */
  created_at: string;
} & Omit<BalanceTransfer, 'balanceTransferId' | 'createdAt'>;
