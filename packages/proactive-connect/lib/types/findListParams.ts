import { SortOrder } from '../enums';

/**
 * Represents parameters for finding lists.
 */
export type FindListParams = {
  /**
   * The page number for pagination.
   */
  page?: number;

  /**
   * The number of lists per page for pagination.
   */
  pageSize?: number;

  /**
   * The sorting order for the lists.
   * Should be one of the values from the 'SortOrder' enum (ASC or DESC).
   */
  order?: SortOrder;
};
