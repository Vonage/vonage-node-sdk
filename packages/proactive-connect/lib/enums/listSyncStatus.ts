/**
 * Enumeration representing synchronization status between the list content (items) and its data source.
 */
export enum SyncStatus {
  /**
   * Configuration is complete.
   */
  CONFIGURED = 'configured',

  /**
   * Data is being cleared.
   */
  CLEARING = 'clearing',

  /**
   * Data is being fetched.
   */
  FETCHING = 'fetching',

  /**
   * Synchronization is paused.
   */
  PAUSED = 'paused',

  /**
   * Synchronization is cancelled.
   */
  CANCELLED = 'cancelled',

  /**
   * Synchronization is completed.
   */
  COMPLETED = 'completed',

  /**
   * Synchronization has failed.
   */
  FAILED = 'failed',
}
