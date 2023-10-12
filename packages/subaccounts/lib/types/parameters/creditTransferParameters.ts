/**
 * Type definition for parameters used to perform a credit transfer between accounts.
 */
export type CreditTransferParameters = {
  /**
   * The account ID from which the credit is transferred.
   */
  from: string;

  /**
   * The account ID to which the credit is transferred.
   */
  to: string;

  /**
   * The amount of credit to transfer.
   */
  amount: string;

  /**
   * (Optional) A reference for the credit transfer.
   */
  reference?: string;
};
