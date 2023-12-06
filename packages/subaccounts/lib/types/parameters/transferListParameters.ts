/**
 * Type definition for parameters used to retrieve a list of transfers for a primary account.
 */
export type TransferListParameters = {
  /**
   * The start date of the retrieval period.
   */
  startDate: string;

  /**
   * (Optional) The end date of the retrieval period. If absent, all transfers until now are returned.
   */
  endDate?: string;

  /**
   * (Optional) Subaccount to filter by. You may send this multiple times to filter on multiple subaccounts.
   */
  subAccount?: string;
};
