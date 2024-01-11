/**
 * Represents the response structure when querying for account balance.
 */
export type GetBalanceResponse = {
  /**
   * The current balance value.
   */
  value: number;

  /**
   * Indicates if the auto-reload feature is enabled.
   */
  autoReload: boolean;
}
