/**
 * Interface representing a filter for searching broadcasts.
 */
export type BroadcastSearchFilter = {
  /**
   * The offset for paginating the results.
   */
  offset?: number;

  /**
   * The maximum number of items to return.
   */
  count?: number;

  /**
   * The session ID to filter broadcasts by.
   */
  sessionId?: string;
}
