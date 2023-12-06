/**
 * Represents simple search options for phone numbers.
 */
export type NumbersSearchSimple = {
  /**
   * Filter numbers that start with a specific string.
   */
  startsWith?: string;

  /**
   * Filter numbers that end with a specific string.
   */
  endsWith?: string;

  /**
   * Filter numbers that contain a specific string.
   */
  contains?: string;
};
