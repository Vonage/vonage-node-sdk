import { APILinks } from '@vonage/server-client';
import { AuditEvent } from './auditEvent';
import { AuditEventPage } from './auditEventPage';

/**
 * Represents the response containing a list of audit events.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type AuditEventListResponse = {
  /**
   * An object containing an array of audit events.
   */
  _embedded?: {
    events: AuditEvent[];
  };

  /**
   * Links associated with the API response.
   */
  _links: APILinks;

  /**
   * Information about the pagination and page details.
   */
  page: AuditEventPage;
};
