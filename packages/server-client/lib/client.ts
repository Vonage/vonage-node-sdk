import { Auth, AuthInterface, AuthParams } from '@vonage/auth';
import {
  request as vetchRequest,
  ResponseTypes,
  VetchResponse,
  VetchOptions,
  HTTPMethods,
} from '@vonage/vetch';
import { AuthenticationType } from './enums/AuthenticationType';
import * as transfomers from './transformers';
import debug from 'debug';
import { ConfigParams } from './types/index';

const log = debug('vonage:server-client');

export abstract class Client {
  public static transformers = transfomers;

  public supportedAuth: AuthenticationType[];

  protected authType?: AuthenticationType;

  protected auth: AuthInterface;

  protected config: ConfigParams;

  constructor(
    credentials: AuthInterface | AuthParams,
    options?: ConfigParams,
  ) {
    this.auth = !Object.hasOwn(credentials, 'getQueryParams')
      ? new Auth(credentials)
      : (credentials as AuthInterface);

    this.config = {
      restHost: options?.restHost || 'https://rest.nexmo.com',
      apiHost: options?.apiHost || 'https://api.nexmo.com',
      videoHost: options?.videoHost || 'https://video.api.vonage.com',
      responseType: options?.responseType || ResponseTypes.json,
      timeout: null,
    } as ConfigParams;
  }

  public get useAuth(): AuthenticationType {
    return this.authType;
  }

  public set useAuth(auth: AuthenticationType) {
    if (!this.supportedAuth.includes(auth)) {
      throw new Error(
        `This api does not support the authentication type ${auth}`,
      );
    }

    this.authType = auth;
  }

  public async addAuthenticationToRequest(
    request: VetchOptions,
  ): Promise<VetchOptions> {
    log(`adding ${this.authType || 'api key/secret'} to request`);
    switch (this.useAuth) {
    case AuthenticationType.BASIC:
      request.headers = Object.assign({}, request.headers, {
        Authorization: await this.auth.createBasicHeader(),
      });
      break;
    case AuthenticationType.JWT:
      request.headers = Object.assign({}, request.headers, {
        Authorization: await this.auth.createBearerHeader(),
      });
      break;
    case AuthenticationType.QUERY_KEY_SECRET:
      request.params = request.params || {};
      request.params = Object.assign(
        {},
        request.params,
        await this.auth.getQueryParams(request.params),
      );
      break;
    case AuthenticationType.KEY_SECRET:
    default:
      if (request.method === 'GET') {
        request.params = request.params || {};
        request.params = Object.assign(
          {},
          request.params,
          await this.auth.getQueryParams(request.params),
        );
      } else {
        request.data = request.data || {};
        request.data = Object.assign(
          {},
          request.data,
          await this.auth.getQueryParams(request.data),
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
    } as VetchOptions;

    return await this.sendRequest<T>(request);
  }

  public async sendFormSubmitRequest<T>(
    url: string,
    payload?: Record<string, string>,
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      ...(payload ? { body: new URLSearchParams(payload) } : {}),
    } as VetchOptions;

    return await this.sendRequest<T>(request);
  }

  public async sendGetRequest<T>(
    url: string,
    queryParams?: { [key: string]: unknown },
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      method: 'GET',
      ...(queryParams ? { params: queryParams } : {}),
    } as VetchOptions;

    return await this.sendRequest<T>(request);
  }

  public async sendPatchRequest<T>(
    url: string,
    payload?: { [key: string]: unknown },
  ): Promise<VetchResponse<T>> {
    return this.sendRequestWithData(HTTPMethods.PUT, url, payload);
  }

  public async sendPostRequest<T>(
    url: string,
    payload?: { [key: string]: unknown },
  ): Promise<VetchResponse<T>> {
    return this.sendRequestWithData(HTTPMethods.PUT, url, payload);
  }

  public sendPutRequest<T>(
    url: string,
    payload?: { [key: string]: unknown },
  ): Promise<VetchResponse<T>> {
    return this.sendRequestWithData(HTTPMethods.PUT, url, payload);
  }

  public async sendRequestWithData<T>(
    method: HTTPMethods,
    url: string,
    payload?: { [key: string]: unknown },
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      ...(!payload ? { data: payload } : {}),
    } as VetchOptions;

    return await this.sendRequest<T>(request);
  }

  public async sendRequest<T>(
    request: VetchOptions,
  ): Promise<VetchResponse<T>> {
    request = await this.addAuthenticationToRequest(request);
    request.timeout = this.config.timeout;
    const result = await vetchRequest<T>(request);
    return result;
  }
}
