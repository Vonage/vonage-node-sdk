import { AuditEventTypes } from '../enums';
import { AuditEvent } from "./auditEvent";

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
   * @example APP_CREATE
   *
   */
  event_type: AuditEventTypes | string;

  /**
   * The date when the audit event was created.
   * @example 2018-07-04T11:41:32
   */
  created_at: string;

  /**
   * Email of the user whose account the audit event is associated with.
   * @example user@example.org
   */
  user_email?: string;

  /**
   * The ID of the user that the audit event is associated with.
   * @example 1234567
   */
  user_id?: string;

  /**
   * The API_KEY of the Vonage API account that the audit event is associated with.
   * @example abcd1234
   */
  account_id: string;

  /**
   * Description of the audit event source.
   * @example Customer Dashboard
   */
  source_description: Pick<AuditEvent, 'sourceDescription'>

  /**
   * ISO 3166-1 Alpha-2 country code recorded for the event.
   * @example GB
   */
  source_country: string;
} & Pick<AuditEvent, 'id' | 'source' | 'context'>
