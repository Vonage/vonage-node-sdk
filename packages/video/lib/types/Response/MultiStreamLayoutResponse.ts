import { SingleStreamLayoutResponse } from './SingleStreamLayoutResponse';

/**
 * Represents a response containing multiple SingleStreamLayoutResponse items.
 */
export type MultiStreamLayoutResponse = {
  /**
   * The count of SingleStreamLayoutResponse items in the response.
   */
  count: number;

  /**
   * An array of SingleStreamLayoutResponse objects representing individual items.
   */
  items: SingleStreamLayoutResponse[];
}
