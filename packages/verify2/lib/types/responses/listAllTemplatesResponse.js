/**
 * The response when listing all templates, including pagination.
 *
 * @typedef {Object} ListAllTemplatesResponse
 * @property {number} page_size - The number of templates returned in the current page. @example 1
 * @property {number} page - The current page number. @example 2
 * @property {number} total_pages - Total number of pages available. @example 10
 * @property {number} total_items - Total number of templates available. @example 25
 * @property {Object} _embedded - The list of templates.
 * @property {APILinks['_links']} _links - Pagination links in HAL format.
 * @property {Array.<Template>} templates - The list of templates transformed into the SDK format.
 */

export {};
