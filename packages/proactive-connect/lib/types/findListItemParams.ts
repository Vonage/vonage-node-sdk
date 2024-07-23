import { SortOrder } from '../enums';

/**
 * Represents parameters for finding list items.
 */
export type FindListItemParams = {
  /**
   * The page number for pagination.
   */
  page?: number;

  /**
   * The number of items per page for pagination.
   */
  pageSize?: number;

  /**
   * The sorting order for the list items.
   * Should be one of the values from the 'SortOrder' enum (ASC or DESC).
   */
  order?: SortOrder;
};
