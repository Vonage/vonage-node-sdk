import { APILinks } from '@vonage/server-client';
import { SortOrder } from '../../enums';
import { ListResponse } from './listResponse';

/**
 * Represents a paginated response containing a list of lists with associated metadata.
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type ListPageResponse = {
  /**
   * The page number of the current page.
   */
  page: number;

  /**
   * The number of lists per page.
   */
  page_size: number;

  /**
   * The total number of lists across all pages.
   */
  total_items: number;

  /**
   * The total number of pages.
   */
  total_pages: number;

  /**
   * The sorting order applied to the lists.
   */
  order: SortOrder;

  /**
   * An embedded object containing an array of list responses with associated metadata.
   */
  _embedded: {
    /**
     * An array of list responses with associated metadata.
     */
    lists: Array<ListResponse>;
  };
} & APILinks;
