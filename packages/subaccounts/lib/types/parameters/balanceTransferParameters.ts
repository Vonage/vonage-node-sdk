/**
 * Type definition for parameters used to transfer balance between accounts.
 */
export type BalanceTransferParameters = {
  /**
   * The account ID from which the balance is transferred.
   */
  from: string;

  /**
   * The account ID to which the balance is transferred.
   */
  to: string;

  /**
   * The amount of balance to transfer.
   */
  amount: number;

  /**
   * (Optional) A reference for the balance transfer.
   */
  reference?: string;
};
