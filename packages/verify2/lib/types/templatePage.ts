import { APILink } from '@vonage/server-client';
import { Template } from './template.js';

/**
 * Value object for a page of templates with camelCase properties.
 */
export type TemplatePage = {
  /**
   * The number of templates returned in the current page.
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
   * Total number of template available.
   * @example 25
   */
  totalItems: number;

  /**
   * The list of templates.
   */
  templates: Template[];

  /**
   * The set of links for the current page.
   */
  links?: Record<string, APILink>;
};
