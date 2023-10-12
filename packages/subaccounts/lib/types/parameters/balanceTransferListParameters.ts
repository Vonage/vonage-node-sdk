/**
 * Type definition for parameters used to retrieve a list of balance transfers for a primary account.
 */
export type BalanceTransferListParameters = {
  /**
   * The start date of the retrieval period.
   */
  startDate: string;

  /**
   * The end date of the retrieval period. If absent, all transfers until now are returned.
   */
  endDate?: string;

  /**
   * Subaccount to filter by. You may send this multiple times to filter on multiple subaccounts.
   */
  subaccount?: string;
};
