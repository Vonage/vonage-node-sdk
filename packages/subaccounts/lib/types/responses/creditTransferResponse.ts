import { CreditTransfer } from '../creditTransfer';

/**
 * Type definition for the response representing a credit transfer, which
 * includes properties such as `credit_transfer_id` and `created_at`. This type
 * combines properties from the credit transfer response with the properties of
 * a `CreditTransfer` (excluding specific properties).
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type CreditTransferResponse = {
  /**
   * The unique identifier for the credit transfer.
   */
  credit_transfer_id: string;

  /**
   * The date and time when the credit transfer was executed.
   */
  created_at: string;
} & Omit<CreditTransfer, 'creditTransferId' | 'createdAt'>;
