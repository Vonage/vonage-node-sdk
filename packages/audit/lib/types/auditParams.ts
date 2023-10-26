import { AuditEventTypes } from '../enums';

/**
 * Represents parameters for querying audit events.
 */
export type AuditParams = {
  /**
   * The type of the audit event to filter by.
   * @example AuditEventTypes.USER_STATUS
   */
  eventType?: AuditEventTypes | string;

  /**
   * The start date for the audit event query.
   * @example '2023-10-01T00:00:00'
   */
  dateFrom?: string;

  /**
   * The end date for the audit event query.
   * @example '2023-10-15T23:59:59'
   */
  dateTo?: string;

  /**
   * Text to search within audit event descriptions.
   * @example 'update'
   */
  searchText?: string;

  /**
   * The page number for paginated results.
   * @example 1
   */
  page?: number;

  /**
   * The number of items per page.
   * @example 20
   */
  size?: number;
};
