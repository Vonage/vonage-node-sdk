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

  protected authType?: AuthenticationType;

  protected auth: AuthInterface;

  protected config: ConfigParams;

  constructor(credentials: AuthInterface | AuthParams, options?: ConfigParams) {
    // eslint-disable-next-line max-len
    this.auth = !Object.prototype.hasOwnProperty.call(
      credentials,
      'getQueryParams',
    )
      ? new Auth(credentials)
      : (credentials as AuthInterface);

    this.config = {
      restHost: options?.restHost || 'https://rest.nexmo.com',
      apiHost: options?.apiHost || 'https://api.nexmo.com',
      videoHost: options?.videoHost || 'https://video.api.vonage.com',
      meetingsHost: options?.meetingsHost || 'https://api-eu.vonage.com',
      proactiveHost: options?.proactiveHost || 'https://api-eu.vonage.com',
      responseType: options?.responseType || ResponseTypes.json,
      timeout: options?.timeout || null,
    } as ConfigParams;
  }

  public async addAuthenticationToRequest(
    request: VetchOptions,
  ): Promise<VetchOptions> {
    let requestPath = 'data';
    log(`adding ${this.authType || 'api key/secret'} to request`);
    switch (this.authType) {
    case AuthenticationType.BASIC:
      request.headers = Object.assign({}, request.headers, {
        Authorization: await this.auth.createBasicHeader(),
      });
      return request;

    case AuthenticationType.JWT:
      request.headers = Object.assign({}, request.headers, {
        Authorization: await this.auth.createBearerHeader(),
      });
      return request;

    case AuthenticationType.QUERY_KEY_SECRET:
      requestPath = 'params';
      // falls through
    case AuthenticationType.KEY_SECRET:
    default:
    }

    if (['GET', 'DELETE'].includes(request.method)) {
      requestPath = 'params';
    }

    const authParams = await this.auth.getQueryParams({});
    let params = {
      ...request[requestPath],
      ...authParams,
    };

    // This is most likely web-form
    if (
      !request[requestPath]
      && this.authType !== AuthenticationType.QUERY_KEY_SECRET
    ) {
      requestPath = 'body';
      params = new URLSearchParams({
        ...Object.fromEntries(request.body.entries()),
        ...authParams,
      });
    }

    request[requestPath] = params;
    return request;
  }

  public async sendDeleteRequest<T>(url: string): Promise<VetchResponse<T>> {
    const request = {
      url,
      method: HTTPMethods.DELETE,
    } as VetchOptions;

    return await this.sendRequest<T>(request);
  }

  public async sendFormSubmitRequest<T>(
    url: string,
    payload?: { [key: string]: any },
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      method: HTTPMethods.POST,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      ...(payload ? { body: new URLSearchParams(payload) } : {}),
    } as VetchOptions;

    return await this.sendRequest<T>(request);
  }

  public async sendGetRequest<T>(
    url: string,
    queryParams?: { [key: string]: any },
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      method: HTTPMethods.GET,
      ...(queryParams ? { params: queryParams } : {}),
    } as VetchOptions;

    return await this.sendRequest<T>(request);
  }

  public async sendPatchRequest<T>(
    url: string,
    payload?: { [key: string]: any },
  ): Promise<VetchResponse<T>> {
    return this.sendRequestWithData(HTTPMethods.PATCH, url, payload);
  }

  public async sendPostRequest<T>(
    url: string,
    payload?: { [key: string]: any },
  ): Promise<VetchResponse<T>> {
    return this.sendRequestWithData(HTTPMethods.POST, url, payload);
  }

  public sendPutRequest<T>(
    url: string,
    payload?: { [key: string]: any },
  ): Promise<VetchResponse<T>> {
    return this.sendRequestWithData(HTTPMethods.PUT, url, payload);
  }

  public async sendRequestWithData<T>(
    method: HTTPMethods,
    url: string,
    payload?: { [key: string]: any },
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      ...(payload ? { data: payload } : {}),
    } as VetchOptions;

    return await this.sendRequest<T>(request);
  }

  public async sendRequest<T>(
    request: VetchOptions,
  ): Promise<VetchResponse<T>> {
    request.timeout = this.config.timeout;
    request = await this.addAuthenticationToRequest(request);
    const result = await vetchRequest<T>(request);
    return result;
  }
}
