import { APILink } from '@vonage/server-client';
import { TemplateFragment } from './templateFragment';

/**
 * Value object for a page of template fragments, with camelCase properties.
 */
export type TemplateFragmentPage = {
  /**
   * The number of fragments returned in the current page.
   * @example 10
   */
  pageSize: number;

  /**
   * The current page number.
   * @example 2
   */
  page: number;

  /**
   * Total number of pages available.
   * @example 5
   */
  totalPages: number;

  /**
   * Total number of template fragments available.
   * @example 25
   */
  totalItems: number;

  /**
   * The list of template fragments.
   */
  fragments: TemplateFragment[];

  /**
   * The set of links for the current page.
   */
  links?: Record<string, APILink>;
};
