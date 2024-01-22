/**
 * Represents the query parameters for listing conversations.
 */
export type ListConversationsParameters = {
  /**
   * Return the records that occurred after this point in time.
   */
  dateStart?: string;

  /**
   * Return the records that occurred before this point in time.
   */
  dateEnd?: string;

  /**
   * Return this amount of records in the response.
   */
  pageSize?: number;

  /**
   * Return the records in ascending or descending order.
   * Must be one of: 'asc', 'desc'.
   */
  order?: 'asc' | 'desc';

  /**
   * The cursor to start returning results from.
   * You are not expected to provide this manually but to follow the URL
   * provided in _links.next.href or _links.prev.href in the response which contains a cursor value.
   *
   * @remarks
   * When using the generator from the client, this is handled for you.
   */
  cursor?: string;

  /**
   * Return the records that were created by this user.
   */
  byUser?: string;

  /**
   * Include custom data for the conversation
   */
  includeCustomData?: boolean;
};
