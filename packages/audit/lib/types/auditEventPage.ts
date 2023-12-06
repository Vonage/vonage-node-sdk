/**
 * Represents information about the pagination of audit events.
 */
export type AuditEventPage = {
  /**
   * The number of items per page.
   */
  size: number;

  /**
   * The total number of elements across all pages.
   */
  totalElements: number;

  /**
   * The total number of pages available.
   */
  totalPages: number;

  /**
   * The current page number.
   */
  number: number;
};
