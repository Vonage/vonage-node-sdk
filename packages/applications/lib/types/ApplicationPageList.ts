import { ApplicationPageResponse } from './Response';

/**
 * Represents a paginated list of applications.
 */
export type ApplicationPageList = {
  /**
   * The total number of applications.
   */
  totalItems: number;

  /**
   * The total number of pages returned.
   */
  totalPages: number;

  /**
   * The number of applications per page.
   */
  pageSize: number;
} & ApplicationPageResponse;
