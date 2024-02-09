export type ListMemberParameters = {
  /**
   * Return this number of members
   */
  pageSize?: number;

  /**
   * Return the records in ascending or descending order
   */
  order?: 'asc' | 'desc';

  /**
   * Return the records starting from this cursor
   *
   * You are not expected to provide this manually, but to follow the url
   * provided in _links.next.href or _links.prev.href in the response which
   * contains a cursor value.
   */
  cursor?: string;
}
