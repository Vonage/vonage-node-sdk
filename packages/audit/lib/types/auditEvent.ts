import { AuditEventTypes } from '../enums.js';
/**
 * Represents an Audit Event.
 */
export type AuditEvent = {
  /**
   * UUID of the audit event.
   */
  id: string;

  /**
   * The type of the audit event.
   *
   */
  eventType: AuditEventTypes | string;

  /**
   * The date when the audit event was created.
   */
  createdAt: string;

  /**
   * Email of the user whose account the audit event is associated with.
   */
  userEmail?: string;

  /**
   * The ID of the user that the audit event is associated with.
   */
  userId?: string;

  /**
   * The API_KEY of the Vonage API account that the audit event is associated with.
   */
  accountId: string;

  /**
   * The source of the event.
   */
  source: 'CD' | 'DEVAPI';

  /**
   * Description of the audit event source.
   */
  sourceDescription: 'Customer Dashboard' | 'Developer API';

  /**
   * ISO 3166-1 Alpha-2 country code recorded for the event.
   */
  sourceCountry: string;

  /**
   * Additional context information for the audit event.
   */
  context?: unknown;
};
