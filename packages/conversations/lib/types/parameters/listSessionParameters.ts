export type ListSessionParameters = {
  /**
   * Return the records per page
   */
  pageSize?: number;

  /**
   * Return the records in ascending or descending order.
   */
  order?: 'asc' | 'desc';

  /**
   * The cursor to start returning results from.
   *
   * You are not expected to provide this manually but to follow the URL
   * provided in _links.next.href or _links.prev.href in the response which contains a cursor value.
   *
   * @remarks
   * When using the generator from the client, this is handled for you.
   */
  cursor?: string;
}
