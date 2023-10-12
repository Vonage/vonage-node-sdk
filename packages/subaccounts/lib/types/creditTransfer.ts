/**
 * Type definition representing a credit transfer, which includes properties such as `creditTransferId`, `amount`,
 * `from`, `to`, `reference`, and `createdAt`.
 */
export type CreditTransfer = {
  /**
   * The unique identifier for the credit transfer.
   */
  creditTransferId: string;

  /**
   * The amount of the credit transfer.
   */
  amount: number;

  /**
   * The source account from which the credit is transferred.
   */
  from: string;

  /**
   * The destination account to which the credit is transferred.
   */
  to: string;

  /**
   * A reference for the credit transfer.
   */
  reference: string;

  /**
   * The date and time when the credit transfer was executed.
   */
  createdAt: string;
};
