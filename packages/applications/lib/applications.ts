import { Auth } from '@vonage/auth';
import { request, ResponseTypes } from '@vonage/vetch';
import { Application } from './interfaces/Application';
import { ApplicationResponse } from './interfaces/ApplicationResponse';
import { ListApplicationResponse } from './interfaces/Response/ListApplicationResponse';
import { ApplicationClassParameters } from './types/ApplicationClassParameters';

export const BASE_URL = 'https://api.nexmo.com/v2/applications'.replace(/\/+$/, '');

const runRequest = async <T>(options: any, config: any): Promise<ApplicationResponse<T>> => {
  options.headers = Object.assign({}, config.headers, { Authorization: 'Basic ' + btoa(`${config.auth.apiKey}:${config.auth.apiSecret}`) });
  const result = await request<T>(options);
  return result;
};

export class Applications {
  protected config: ApplicationClassParameters;

  constructor(opts?: ApplicationClassParameters) {
    if (opts) {
      opts.auth = new Auth({ apiKey: opts.apiKey, apiSecret: opts.apiSecret, privateKey: opts.privateKey, applicationId: opts.applicationId, signature: opts.signature });
      opts.baseUrl = opts.baseUrl || BASE_URL;
      opts.responseType = opts.responseType || ResponseTypes.json;
      this.config = opts;
    }
  }

  public async createApplication(application: Application): Promise<Application> {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/`,
      method: 'POST',
      data: application,
    };

    const resp = await runRequest<Application>(localVetchOptions, this.config);
    return resp.data;
  }

  public async deleteApplication(applicationId: string): Promise<void> {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/${applicationId}`,
      method: 'DELETE',
    };

    await runRequest<void>(localVetchOptions, this.config);
  }

  public async getApplication(applicationId: string): Promise<Application> {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/${applicationId}`,
      method: 'GET',
    };

    const resp = await runRequest<Application>(localVetchOptions, this.config);
    return resp.data;
  }

  public async listApplications(filter: { page_size?: number; page?: number }): Promise<ListApplicationResponse> {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/`,
      method: 'GET',
    };

    const resp = await runRequest<ListApplicationResponse>(localVetchOptions, this.config);
    return resp.data;
  }

  public async updateApplication(application: Application): Promise<Application> {
    const localVetchOptions = {
      url: `${this.config.baseUrl}/${application.id}`,
      method: 'PUT',
      data: application,
    };

    const resp = await runRequest<Application>(localVetchOptions, this.config);
    return resp.data;
  }
}
