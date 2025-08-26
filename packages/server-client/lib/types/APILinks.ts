import { APILink } from './APILink.js';

/**
 * Represents a set of links in the HAL format.
 *
 * @see {@link https://tools.ietf.org/html/draft-kelly-json-hal-08} for more details on HAL format.
 *
 */
export type APILinks = {
  /**
   * The set of links.
   */
  _links?: {
    /**
     * The link for the current resource.
     */
    self: APILink;

    /**
     * The link for the next page of resources.
     */
    next?: APILink;

    /**
     * The link for the first page of resources.
     */
    first?: APILink;

    /**
     * The link for the last page of resources.
     */
    last?: APILink;

    /**
     * The link for the previous page of resources.
     */
    prev?: APILink;
  };
};
