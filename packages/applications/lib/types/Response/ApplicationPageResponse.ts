import { Application } from '..';
import { ApplicationResponse } from './ApplicationResponse';
import { APILinks } from '@vonage/server-client';

/**
 * Represents the response for a paginated list of applications.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @link https://developer.vonage.com/en/api/application.v2#listApplication
 */
export type ApplicationPageResponse = {
  /**
   * The number of applications per page.
   */
  page_size: number;

  /**
   * The current page number (starts at 1).
   */
  page: number;

  /**
   * The total number of applications.
   */
  total_items: number;

  /**
   * The total number of pages returned.
   */
  total_pages: number;

  /**
   * A list of applications matching your existing filters.
   */
  applications: ApplicationResponse[];

  /**
   * An object containing a list of applications.
   */
  _embedded: {

    /**
     * A list of applications matching your existing filters.
     */
    applications: Array<ApplicationResponse | Application>;
  };
} & APILinks;
