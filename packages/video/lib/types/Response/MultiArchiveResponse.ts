import { SingleArchiveResponse } from './SingleArchiveResponse';

/**
 * Represents a response containing multiple archive items.
 */
export type MultiArchiveResponse = {
  /**
   * The count of archive items in the response.
   */
  count: number;

  /**
   * An array of SingleArchiveResponse objects representing individual archive items.
   */
  items: SingleArchiveResponse[];
}
