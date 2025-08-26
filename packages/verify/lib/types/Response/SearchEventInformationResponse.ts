import { SearchEventTypes } from '../../enums/index.js';

/**
 * Represents the response for searching event information.
 */
export type SearchEventInformationResponse = {
  /**
   * The type of the event.
   */
  type: SearchEventTypes;
  /**
   * The ID of the event.
   */
  id: string;
}
