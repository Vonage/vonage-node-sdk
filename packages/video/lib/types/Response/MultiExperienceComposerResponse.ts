import { ExperienceComposerResponse } from './ExperienceComposerResponse.js';

/**
 * Represents a response containing multiple ExperienceComposerResponse items.
 */
export type MultiExperienceComposerResponse = {
  /**
   * The count of ExperienceComposerResponse items in the response.
   */
  count: number;

  /**
   * An array of ExperienceComposerResponse objects representing individual items.
   */
  items: ExperienceComposerResponse[];
}
