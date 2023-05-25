import { AuthenticationType, Client } from '@vonage/server-client';
import {
  ApplicationPageResponse,
  ApplicationResponse,
  Application,
  ListApplicationParams,
  ApplicationPageList,
} from './types';

const apiToApplication = (response: ApplicationResponse) => {
  delete response?._links;
  return Client.transformers.camelCaseObjectKeys(response, true, true);
};

export class Applications extends Client {
  protected authType = AuthenticationType.BASIC;

  public async listApplications(filter: {
    page_size?: number;
    page?: number;
  }): Promise<ApplicationPageResponse> {
    return this.getApplicationPage(filter);
  }

  public async *listAllApplications(
    params: ListApplicationParams = {},
  ): AsyncGenerator<Application, void & Application, undefined> {
    let next = null;
    params.page = params?.page || 1;
    do {
      const resp = await this.getApplicationPage(params);

      yield* resp._embedded?.applications;
      next = resp._links?.next;
      params.page++;
    } while (next);
  }

  public async getApplicationPage(
    filter: ListApplicationParams,
  ): Promise<ApplicationPageList> {
    const resp = await this.sendGetRequest<ApplicationPageResponse>(
      `${this.config.apiHost}/v2/applications`,
      Client.transformers.snakeCaseObjectKeys(filter),
    );

    if (resp.data._embedded?.applications) {
      resp.data._embedded.applications
        = resp.data._embedded.applications.map(apiToApplication);
    }

    return {
      ...resp.data,
      totalItems: resp.data.total_items,
      totalPages: resp.data.total_pages,
      pageSize: resp.data.page_size,
    };
  }

  public async createApplication(
    application: Application,
  ): Promise<Application> {
    const resp = await this.sendPostRequest<ApplicationResponse>(
      `${this.config.apiHost}/v2/applications`,
      Client.transformers.snakeCaseObjectKeys(application, true),
    );

    return apiToApplication(resp.data);
  }

  public async getApplication(applicationId: string): Promise<Application> {
    const resp = await this.sendGetRequest<ApplicationResponse>(
      `${this.config.apiHost}/v2/applications/${applicationId}`,
    );

    return apiToApplication(resp.data);
  }

  public async updateApplication(
    application: Application,
  ): Promise<Application> {
    const resp = await this.sendPutRequest<ApplicationResponse>(
      `${this.config.apiHost}/v2/applications/${application.id}`,
      Client.transformers.snakeCaseObjectKeys(application, true),
    );
    return apiToApplication(resp.data);
  }

  public async deleteApplication(applicationId: string): Promise<void> {
    await this.sendDeleteRequest<void>(
      `${this.config.apiHost}/v2/applications/${applicationId}`,
    );
  }
}
