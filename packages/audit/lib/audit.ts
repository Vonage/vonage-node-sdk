import { AuthenticationType, Client } from '@vonage/server-client';
import { AuditParams } from './types/auditParams';
import { AuditEvent } from './types/auditEvent';
import { AuditEventListResponse } from './interfaces/auditEventListResponse';

export class Audit extends Client {
  protected BASE_PATH = 'beta';
  protected authType = AuthenticationType.BASIC;

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

      const events = (resp.data?._embedded.events || []).map((event) =>
        Client.transformers.camelCaseObjectKeys(event, true),
      );

      totalPages = resp.data?.page?.totalPages || 0;

      yield* events;
      page++;
    } while (page <= totalPages);
  }

  public async getEvent(eventId: string): Promise<AuditEvent> {
    const resp = await this.sendGetRequest<AuditEvent>(
      `${this.config.apiHost}/${this.BASE_PATH}/audit/events/${eventId}`,
    );
    return Client.transformers.camelCaseObjectKeys(resp.data, true);
  }
}
