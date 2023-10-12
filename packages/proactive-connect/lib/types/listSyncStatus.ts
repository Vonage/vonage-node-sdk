import { SyncStatus } from '../enums';

/**
 * Represents the synchronization status of a list.
 */
export type ListSyncStatus = {
  /**
   * The synchronization status value, which should be one of the values from the 'SyncStatus' enum.
   */
  value: SyncStatus;

  /**
   * Indicates whether the list metadata (definition) is modified since the latest sync.
   */
  metadataModified: boolean;

  /**
   * Indicates whether one or more list items were added, removed, and/or modified since the latest sync.
   */
  dataModified: boolean;

  /**
   * Indicates whether the list content or metadata were modified since the last sync.
   */
  dirty: boolean;

  /**
   * Additional details on the synchronization status (optional).
   */
  details?: string;
};
