import { AuthenticationType, Client } from '@vonage/server-client';
import {
  AuditEventListResponse,
  AuditEvent,
  AuditParams,
  AuditEventResponse,
} from './types';

/**
 * Represents an SDK client for interacting with audit-related functionality.
 *
 * @remarks
 * This client is only available as a standalone client. It cannot be
 * instantiated from a Vonage client.
 *
 * @example
 * Create a standalone Audit client
 *
 * ```ts
 * import { Audit } from '@vonage/audit';
 *
 * const auditClient = new Audit({
 *  apiKey: VONAGE_API_KEY,
 *  apiSecret: VONAGE_API_SECRET
 * });
 * ```
 */
export class Audit extends Client {
  // The base path for audit-related API endpoints
  protected BASE_PATH = 'beta';

  // Authentication type for the client
  authType = AuthenticationType.BASIC;

  /**
   * Retrieves a list of audit events based on specified parameters.
   *
   * @param {AuditParams} params - The query parameters for filtering audit events.
   * @return { AsyncGenerator<AuditEvent>} An async generator that yields audit events.
   *
   * @example
   * Retrieve a list of audit events
   *
   * ```ts
   * const auditEvents = auditClient.getEvents({
   *   page: 1,
   *   size: 10,
   *   dateFrom: '2021-01-01T00:00:00Z',
   *   dateTo: '2021-01-31T23:59:59Z',
   *   eventType: 'message',
   *   search: 'search term'
   * });
   *
   * for await (const event of auditEvents) {
   *   console.log(event.id);
   *   console.log(event.type);
   *   console.log(event.created);
   *   console.log(event.accountId);
   *   console.log(event.requestId);
   *   console.log(event.request);
   *   console.log(event.response);
   *   console.log(event.ipAddress);
   *   console.log(event.country);
   *   console.log(event.msisdn);
   * }
   * ```
   */
  async *getEvents(
    params: AuditParams,
  ): AsyncGenerator<AuditEvent, void, undefined> {
    let totalPages = 0;
    let page = params?.page || 1;
    do {
      params.page = page;
      const resp = await this.sendGetRequest<AuditEventListResponse>(
        `${this.config.apiHost}/${this.BASE_PATH}/audit/events`,
        Client.transformers.snakeCaseObjectKeys(params),
      );

      const events = (resp.data?._embedded?.events || []).map((event) =>
        Client.transformers.camelCaseObjectKeys(event, true),
      );

      totalPages = resp.data?.page?.totalPages || 0;

      yield* events as AuditEvent[];
      page++;
    } while (page <= totalPages);
  }

  /**
   * Retrieves a specific audit event by its ID.
   *
   * @param {string} eventId - The ID of the audit event to retrieve.
   * @return {Promise<AuditEvent>} A promise that resolves to the retrieved audit event.
   *
   * @example
   * Retrieve a specific audit event
   *
   * ```ts
   * const auditEvent = await auditClient.getEvent('event-id');
   * console.log(auditEvent.id);
   * ```
   */
  async getEvent(eventId: string): Promise<AuditEvent> {
    const resp = await this.sendGetRequest<AuditEventResponse>(
      `${this.config.apiHost}/${this.BASE_PATH}/audit/events/${eventId}`,
    );
    return Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
    ) as AuditEvent;
  }
}
