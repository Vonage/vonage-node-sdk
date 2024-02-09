/**
 * List Event Parameters
 */
export type ListEventParameters = {
  /**
   * Exclude deleted events.
   */
  excludeDeletedEvents?: boolean;

  /**
   * The ID to start returning events at.
   */
  startId?: string;

  /**
   * The ID to end returning events at.
   */
  endId?: string;

  /**
   * The type of event to search for. Does not currently support custom events.
   */
  eventType?: string;

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
   * You are not expected to provide this manually, but to follow the URL provided
   * in _links.next.href or _links.prev.href in the response which contains a cursor value.
   */
  cursor?: string;
}

