/**
 * The response when listing all template fragments, including pagination.
 *
 * @typedef {Object} ListAllTemplateFragmentsResponse
 * @property {number} page_size - The number of fragments returned in the current page. @example 10
 * @property {number} page - The current page number. @example 2
 * @property {number} total_pages - Total number of pages available. @example 5
 * @property {number} total_items - Total number of template fragments available. @example 25
 * @property {Object} _embedded - The list of template fragments.
 * @property {APILinks['_links']} _links - Pagination links in HAL format.
 */

export {};
