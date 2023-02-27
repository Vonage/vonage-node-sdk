import { Auth, AuthInterface } from '@vonage/auth';
import {
  request as vetchRequest,
  ResponseTypes,
  VetchResponse,
} from '@vonage/vetch';
import { AuthenticationType } from './enums/AuthenticationType';
import * as transfomers from './transformers';
import debug from 'debug';

const log = debug('vonage:server-client');

export abstract class Client {
  protected authType?: AuthenticationType;

  protected auth: AuthInterface;
  protected config: {
        restHost: string
        apiHost: string
        videoHost: string
        responseType: string
        timeout: number
    };

  constructor(
    credentials: AuthInterface,
    options?: {
            restHost: string
            apiHost: string
            videoHost: string
            responseType: ResponseTypes
            timeout: number
        },
  ) {
    if (typeof credentials.getQueryParams === 'undefined') {
      credentials = new Auth(credentials);
    }

    this.auth = credentials;
    this.config = {
      restHost: null,
      apiHost: null,
      videoHost: null,
      responseType: null,
      timeout: null,
    };

    this.config.restHost = options?.restHost || 'https://rest.nexmo.com';
    this.config.apiHost = options?.apiHost || 'https://api.nexmo.com';
    this.config.videoHost
            = options?.videoHost || 'https://video.api.vonage.com';
    this.config.responseType = options?.responseType || ResponseTypes.json;
  }

  public static transformers = transfomers;

  public addAuthenticationToRequest(request: any): any {
    log(`adding ${this.authType || 'api key/secret'} to request`);
    switch (this.authType) {
    case AuthenticationType.BASIC:
      request.headers = Object.assign({}, request.headers, {
        Authorization: this.auth.createBasicHeader(),
      });
      break;
    case AuthenticationType.JWT:
      request.headers = Object.assign({}, request.headers, {
        Authorization: this.auth.createBearerHeader(),
      });
      break;
    case AuthenticationType.QUERY_KEY_SECRET:
      request.params = request.params || {};
      request.params = Object.assign(
        {},
        request.params,
        this.auth.getQueryParams(request.params),
      );
      break;
    case AuthenticationType.KEY_SECRET:
    default:
      if (request.method === 'GET') {
        request.params = request.params || {};
        request.params = Object.assign(
          {},
          request.params,
          this.auth.getQueryParams(request.params),
        );
      } else {
        request.data = request.data || {};
        request.data = Object.assign(
          {},
          request.data,
          this.auth.getQueryParams(request.data),
        );
      }
      break;
    }

    return request;
  }

  public async sendDeleteRequest<T>(url: string): Promise<VetchResponse<T>> {
    const request = {
      url,
      method: 'DELETE',
    };

    return await this.sendRequest<T>(request);
  }

  public async sendFormSubmitRequest<T>(
    url: string,
    payload?: { [key: string]: any },
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      body: new URLSearchParams(payload),
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    if (!payload) {
      delete request.body;
    }

    return await this.sendRequest<T>(request);
  }

  public async sendGetRequest<T>(
    url: string,
    queryParams?: { [key: string]: any },
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      params: queryParams,
      method: 'GET',
    };

    if (!queryParams) {
      delete request.params;
    }

    return await this.sendRequest<T>(request);
  }

  public async sendPatchRequest<T>(
    url: string,
    payload?: { [key: string]: any },
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      data: payload,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (!payload) {
      delete request.data;
    }

    return await this.sendRequest<T>(request);
  }

  public async sendPostRequest<T>(
    url: string,
    payload?: { [key: string]: any },
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      data: payload,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (!payload) {
      delete request.data;
    }

    return await this.sendRequest<T>(request);
  }

  public async sendPutRequest<T>(
    url: string,
    payload?: { [key: string]: any },
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      data: payload,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (!payload) {
      delete request.data;
    }

    return await this.sendRequest<T>(request);
  }

  public async sendRequest<T>(request: any): Promise<VetchResponse<T>> {
    request = this.addAuthenticationToRequest(request);
    request.timeout = this.config.timeout;
    const result = await vetchRequest<T>(request);
    return result;
  }
}
