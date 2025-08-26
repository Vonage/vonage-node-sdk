import { BroadcastDetailsResponse } from './BroadcastDetailsResponse.js';

/**
 * Represents a response containing multiple broadcast details items.
 */
export type MultiBroadcastResponse = {
  /**
   * The count of broadcast details items in the response.
   */
  count: number;

  /**
   * An array of BroadcastDetailsResponse objects representing individual broadcast details items.
   */
  items: BroadcastDetailsResponse[];
}
