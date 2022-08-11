import { AuthenticationType, Client } from '@vonage/server-client';
import { Application } from './interfaces/Application';
import { ListApplicationResponse } from './interfaces/Response/ListApplicationResponse';

export class Applications extends Client {
  protected authType = AuthenticationType.BASIC;
  
  public async createApplication(application: Application): Promise<Application> {
    const resp = await this.sendPostRequest<Application>(`${this.config.apiHost}/v2/applications`, application);
    return resp.data;
  }

  public async deleteApplication(applicationId: string): Promise<void> {
    await this.sendDeleteRequest<void>(`${this.config.apiHost}/v2/applications/${applicationId}`);
  }

  public async getApplication(applicationId: string): Promise<Application> {
    const resp = await this.sendGetRequest<Application>(`${this.config.apiHost}/v2/applications/${applicationId}`);
    return resp.data;
  }

  public async listApplications(filter: { page_size?: number; page?: number }): Promise<ListApplicationResponse> {
    const resp = await this.sendGetRequest<ListApplicationResponse>(`${this.config.apiHost}/v2/applications`, filter)
    return resp.data;
  }

  public async updateApplication(application: Application): Promise<Application> {
    const resp = await this.sendPutRequest<Application>(`${this.config.apiHost}/v2/applications/${application.id}`, application);
    return resp.data;
  }
}
