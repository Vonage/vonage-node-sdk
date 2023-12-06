import { AuthenticationType, Client } from '@vonage/server-client';
import {
  AuditEventListResponse,
  AuditEvent,
  AuditParams,
  AuditEventResponse
} from './types';

/**
 * Represents an SDK client for interacting with audit-related functionality.
 */
export class Audit extends Client {
  // The base path for audit-related API endpoints
  protected BASE_PATH = 'beta';

  // Authentication type for the client
  authType = AuthenticationType.BASIC;

  /**
   * Retrieves a list of audit events based on specified parameters.
   *
   * @params params {AuditParams} - The query parameters for filtering audit events.
   * @return An async generator that yields audit events.
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
   * @params eventId {string} - The ID of the audit event to retrieve.
   * @return A promise that resolves to the retrieved audit event.
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
