/**
 * Interface representing filters for searching archives.
 */
export type ArchiveSearchFilter = {
  /**
   * The start offset in the list of existing archives.
   */
  offset?: number;

  /**
   * The number of archives to retrieve starting at the offset. Default is 50, with a maximum of 1000.
   */
  count?: number;

  /**
   * Retrieve archives for a specific session ID.
   */
  sessionId?: string;
}
