import { TemplateResponse } from './templateResponse.js';
import { Template } from '../template.js';
import { APILinks } from '@vonage/server-client';

/**
 * The response when listing all templates, including pagination.
 */
export type ListAllTemplatesResponse = {
  /**
   * The number of templates returned in the current page.
   * @example 1
   */
  page_size: number;

  /**
   * The current page number.
   * @example 2
   */
  page: number;

  /**
   * Total number of pages available.
   * @example 10
   */
  total_pages: number;

  /**
   * Total number of templates available.
   * @example 25
   */
  total_items: number;

  /**
   * The list of templates.
   */
  _embedded: {
    templates: TemplateResponse[];
  };

  /**
   * Pagination links in HAL format.
   */
  _links: APILinks['_links'];

  /**
   * The list of templates transformed into the SDK format.
   */
  templates: Template[];
};
