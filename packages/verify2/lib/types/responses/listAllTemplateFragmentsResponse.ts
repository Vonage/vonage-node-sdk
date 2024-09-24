import { APILinks } from '@vonage/server-client';
import { TemplateFragmentResponse } from './templateFragmentResponse';

/**
 * The response when listing all template fragments, including pagination.
 */
export type ListAllTemplateFragmentsResponse = {
  /**
   * The number of fragments returned in the current page.
   * @example 10
   */
  page_size: number;

  /**
   * The current page number.
   * @example 2
   */
  page: number;

  /**
   * Total number of pages available.
   * @example 5
   */
  total_pages: number;

  /**
   * Total number of template fragments available.
   * @example 25
   */
  total_items: number;

  /**
   * The list of template fragments.
   */
  _embedded: {
    template_fragments: TemplateFragmentResponse[];
  };

  /**
   * Pagination links in HAL format.
   */
  _links: APILinks['_links'];
};
