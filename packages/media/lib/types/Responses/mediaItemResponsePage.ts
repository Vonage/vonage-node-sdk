import { APILinks, APILink } from '@vonage/server-client';
import { MediaItemResponse } from './mediaItemResponse';

/**
 * Represents the response data for a page of media items.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type MediaItemPageResponse = {
  /**
   * The amount of records returned in this response.
   */
  page_size: number;

  /**
   * The page_index used in your request.
   */
  page_index: number;

  /**
   * The total number of records returned by your request.
   */
  count: number;

  /**
   * A collection of media items.
   */
  _embedded: {
    media: Array<MediaItemResponse>;
  };

  /**
   * Links to navigate through pages.
   */
  _links: {
    /**
     * Link to the first page.
     */
    first?: APILink;

    /**
     * Link to the last page.
     */
    last?: APILink;

    /**
     * Link to the next page.
     */
    next?: APILink;

    /**
     * Link to the previous page.
     */
    prev?: APILink;

    /**
     * Link to the start page.
     */
    start?: APILink;
  } & APILinks;
};
