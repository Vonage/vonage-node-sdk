/**
 * Type definition representing a balance transfer, which includes properties
 * such as `balanceTransferId`, `amount`, `from`, `to`, `reference`, and `createdAt`.
 */
export type BalanceTransfer = {
  /**
   * The unique identifier for the balance transfer.
   */
  balanceTransferId: string;

  /**
   * The amount of the balance transfer.
   */
  amount: number;

  /**
   * The source account from which the balance is transferred.
   */
  from: string;

  /**
   * The destination account to which the balance is transferred.
   */
  to: string;

  /**
   * A reference for the balance transfer.
   */
  reference: string;

  /**
   * The date and time when the balance transfer was executed.
   */
  createdAt: string;
};
