/**
 * Interface representing filters for listing Experience Composer items.
 */
export type ExperienceComposerListFilter = {
  /**
   * The offset for paginating through the list (optional).
   */
  offset?: number;

  /**
   * The maximum number of items to retrieve (optional).
   */
  count?: number;
}
