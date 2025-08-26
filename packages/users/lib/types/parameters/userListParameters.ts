import { SortOrder } from '../../enums/index.js';

/**
 * Parameters for listing users.
 */
export type UserListParameters = {
  /**
   * The number of records to return in the response. Minimum: 1, Maximum: 100, Default: 10.
   * Example: 10
   */
  pageSize?: number;

  /**
   * The sorting order for the records. Must be one of: 'ASC' (Ascending) or 'DESC' (Descending).
   */
  order?: SortOrder;

  /**
   * The cursor to start returning results from. You are not expected to provide this manually,
   * but to follow the URL provided in _links.next.href or _links.prev.href in the response which contains a cursor
   * value.
   */
  cursor?: string;

  /**
   * Unique name for a user. Example: 'my_user_name'.
   */
  name?: string;
};
