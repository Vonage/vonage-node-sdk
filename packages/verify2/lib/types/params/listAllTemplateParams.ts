/**
 * Query parameters for listing all templates in the Verify API.
 */
export interface ListAllTemplatesParams {
  /**
   * The number of templates to return per page.
   * @example 10
   */
  pageSize?: number;

  /**
   * The page number to retrieve.
   * @example 2
   */
  page?: number;
}
