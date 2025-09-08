import { AuditEventTypes } from '../enums.js';
import { AuditEvent } from './auditEvent.js';

/**
 * Represents an Audit Event.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type AuditEventResponse = {
  /**
   * The type of the audit event.
   *
   */
  event_type: AuditEventTypes | string;

  /**
   * The date when the audit event was created.
   */
  created_at: string;

  /**
   * Email of the user whose account the audit event is associated with.
   */
  user_email?: string;

  /**
   * The ID of the user that the audit event is associated with.
   */
  user_id?: string;

  /**
   * The API_KEY of the Vonage API account that the audit event is associated with.
   */
  account_id: string;

  /**
   * Description of the audit event source.
   */
  source_description: Pick<AuditEvent, 'sourceDescription'>;

  /**
   * ISO 3166-1 Alpha-2 country code recorded for the event.
   */
  source_country: string;
} & Pick<AuditEvent, 'id' | 'source' | 'context'>;
