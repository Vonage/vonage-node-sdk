import { APILinks } from '@vonage/server-client';
import { ListItem } from '../listItem';

/**
 * Represents a response object for a list item with associated data.
 * @template DataType - The type of data associated with the list item.
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type ListItemResponse<DataType> = Omit<
  ListItem<DataType>,
  'createdAt' | 'updatedAt' | 'listId'
  > & {
  /**
   * The creation date and time of the list item.
   */
  created_at: string;

  /**
   * The last update date and time of the list item.
   */
  updated_at: string;

  /**
   * The unique identifier of the list to which this item belongs.
   */
  list_id: string;
} & APILinks
