import { AuditEventTypes } from '../enums.js';

/**
 * Represents parameters for querying audit events.
 */
export type AuditParams = {
  /**
   * The type of the audit event to filter by.
   */
  eventType?: AuditEventTypes | string;

  /**
   * The start date for the audit event query.
   */
  dateFrom?: string;

  /**
   * The end date for the audit event query.
   */
  dateTo?: string;

  /**
   * Text to search within audit event descriptions.
   */
  searchText?: string;

  /**
   * The page number for paginated results.
   */
  page?: number;

  /**
   * The number of items per page.
   */
  size?: number;
};
