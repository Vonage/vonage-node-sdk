/**
 * Parameters for listing applications with pagination.
 */
export type ListApplicationParams = {
  /**
   *  The size of the page for pagination.
   */
  pageSize?: number;

  /**
   * @deprecated please use pageSize instead
   * The deprecated size of the page for pagination.
   */
  page_size?: number;

  /**
   * The specific page number for pagination.
   */
  page?: number;
};
