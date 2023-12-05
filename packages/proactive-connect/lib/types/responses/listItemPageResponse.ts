import { APILinks } from '@vonage/server-client';
import { SortOrder } from '../../enums';
import { ListItemResponse } from './listItemResponse';

/**
 * Represents a paginated response containing a list of items with associated metadata.
 * @template DataType - The type of data associated with the list items.
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type ListItemPageResponse<DataType> = {
  /**
   * The page number of the current page.
   */
  page: number;

  /**
   * The number of items per page.
   */
  page_size: number;

  /**
   * The total number of items across all pages.
   */
  total_items: number;

  /**
   * The total number of pages.
   */
  total_pages: number;

  /**
   * The sorting order applied to the list items.
   */
  order: SortOrder;

  /**
   * An embedded object containing an array of list items and their associated data.
   */
  _embedded: {
    /**
     * An array of list item responses with associated data.
     */
    items: Array<ListItemResponse<DataType>>;
  };
} & APILinks;
