/**
 * Represents parameters for querying media items.
 */
export type MediaParameters = {
  /**
   * The order of search results. Must be one of 'ascending' or 'descending'.
   */
  order?: 'ascending' | 'descending';

  /**
   * Which page to retrieve in pagination.
   */
  pageIndex?: number;

  /**
   * How many items at most per page.
   */
  pageSize?: number;

  /**
   * Retrieve results created on or after this timestamp.
   */
  startTime?: string;

  /**
   * Retrieve results created on or before this timestamp.
   */
  endTime?: string;
};
