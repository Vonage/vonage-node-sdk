/**
 * Enumeration of search patterns.
 * @enum {string}
 */
export const SearchPattern = Object.freeze({
  /**
     * Indicates a search for values that start with the given pattern.
     */
  START_WITH: 0,
  /**
     * Indicates a search for values that contain the given pattern.
     */
  CONTAINS: 1,
  /**
     * Indicates a search for values that end with the given pattern.
     */
  ENDS_WITH: 2
});
