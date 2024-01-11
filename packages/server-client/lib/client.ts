import fetch, { Response } from 'node-fetch';
import AbortError from 'node-fetch';
import { Auth, AuthInterface, AuthParams } from '@vonage/auth';
import {
  ResponseTypes,
  VetchResponse,
  VetchOptions,
  HTTPMethods,
  ContentType,
  VetchError,
} from '@vonage/vetch';
import { AuthenticationType } from './enums';
import * as transfomers from './transformers';
import debug from 'debug';
import { ConfigParams } from './types';

const log = debug('vonage:server-client');

export class Client {
  /**
   * Static property containing utility transformers.
   */
  public static transformers = transfomers;

  /**
   * The type of authentication used for the client's requests.
   */
  protected authType?: AuthenticationType = AuthenticationType.QUERY_KEY_SECRET;

  /**
   * The authentication instance responsible for generating authentication headers and query parameters.
   */
  protected auth: AuthInterface;

  /**
   * Configuration settings for the client, including default hosts for various services and other request settings.
   */
  protected config: ConfigParams;

  /**
   * Creates a new instance of the Client.
   *
   * @param {AuthInterface | AuthParams} credentials - The authentication credentials or an authentication instance.
   * @param {ConfigParams} [options] - Optional configuration settings for the client.
   */
  constructor(credentials: AuthInterface | AuthParams, options?: ConfigParams) {
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

  /**
   * Adds the appropriate authentication headers or parameters to the request based on the authentication type.
   *
   * @param {VetchOptions} request - The request options to which authentication needs to be added.
   * @return {Promise<VetchOptions>} - The request options with the added authentication.
   */
  async addAuthenticationToRequest(
    request: VetchOptions,
  ): Promise<VetchOptions> {
    log(`adding ${this.authType || 'api key/secret'} to request`);
    if (
      !Object.values(AuthenticationType).includes(
        this.authType as AuthenticationType,
      )
    ) {
      throw new Error('No authentication type set');
    }

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
    }

    if (this.authType === AuthenticationType.QUERY_KEY_SECRET) {
      log(`adding parameters to query string`);
      request.params = {
        ...(request.params ? request.params : {}),
        ...(await this.auth.getQueryParams({})),
      };
      return request;
    }

    if (typeof request.data === 'string') {
      throw new Error('Cannot append auth parameters to body');
    }

    const authParams = await this.auth.getQueryParams({});
    request.data = request.data ?? {};

    // JSON as default
    log(`Adding parameters to body`);
    request.data = {
      ...request.data,
      ...authParams,
    };

    return request;
  }

  /**
   * Sends a DELETE request to the specified URL.
   *
   * @param {string} url - The URL endpoint for the DELETE request.
   * @return {Promise<VetchResponse<T>>} - The response from the DELETE request.
   */
  async sendDeleteRequest<T>(url: string): Promise<VetchResponse<T>> {
    const request = {
      url,
      method: HTTPMethods.DELETE,
    } as VetchOptions;

    return await this.sendRequest<T>(request);
  }

  /**
   * Sends a POST request with form data to the specified URL.
   *
   * @param {string} url - The URL endpoint for the POST request.
   * @param {Record<string, string>} [payload] - Optional payload containing form data to send with the POST request.
   * @return {Promise<VetchResponse<T>>} - The response from the POST request.
   */
  async sendFormSubmitRequest<T>(
    url: string,
    payload?: Record<string, string>,
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      method: HTTPMethods.POST,
      type: ContentType.FORM_URLENCODED,
      ...(payload ? { data: payload } : {}),
    } as VetchOptions;

    return await this.sendRequest<T>(request);
  }

  /**
   * Sends a GET request to the specified URL with optional query parameters.
   *
   * @param {string} url - The URL endpoint for the GET request.
   * @param {Record<string, unknown>} [queryParams] - Optional query parameters to append to the URL. These should be compatible with Node's URLSearchParams.
   * @return {Promise<VetchResponse<T>>} - The response from the GET request.
   */
  async sendGetRequest<T>(
    url: string,
    queryParams?: { [key: string]: unknown },
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      method: HTTPMethods.GET,
      ...(queryParams ? { params: queryParams } : {}),
    } as VetchOptions;

    return await this.sendRequest<T>(request);
  }

  /**
   * Sends a PATCH request to the specified URL with an optional payload.
   *
   * @param {string} url - The URL endpoint for the PATCH request.
   * @param {Record<string, unknown>} [payload] - Optional payload to be sent as the body of the PATCH request.
   * @return {Promise<VetchResponse<T>>} - The response from the PATCH request.
   */
  async sendPatchRequest<T>(
    url: string,
    payload?: { [key: string]: unknown },
  ): Promise<VetchResponse<T>> {
    return this.sendRequestWithData(HTTPMethods.PATCH, url, payload);
  }

  /**
   * Sends a POST request to the specified URL with an optional payload.
   *
   * @param {string} url - The URL endpoint for the POST request.
   * @param {Record<string, unknown>} [payload] - Optional payload to be sent as the body of the POST request.
   * @return {Promise<VetchResponse<T>>} - The response from the POST request.
   */
  async sendPostRequest<T>(
    url: string,
    payload?: { [key: string]: unknown },
  ): Promise<VetchResponse<T>> {
    return this.sendRequestWithData(HTTPMethods.POST, url, payload);
  }

  /**
   * Sends a PUT request to the specified URL with an optional payload.
   *
   * @param {string} url - The URL endpoint for the PUT request.
   * @param {Record<string, unknown>} [payload] - Optional payload to be sent as the body of the PUT request.
   * @return {Promise<VetchResponse<T>>} - The response from the PUT request.
   */
  sendPutRequest<T>(
    url: string,
    payload?: { [key: string]: unknown },
  ): Promise<VetchResponse<T>> {
    return this.sendRequestWithData(HTTPMethods.PUT, url, payload);
  }

  /**
   * Sends a request with JSON-encoded data to the specified URL using the provided HTTP method.
   *
   * @param {HTTPMethods.POST | HTTPMethods.PATCH | HTTPMethods.PUT} method - The HTTP method to be used for the request (only POST, PATCH, or PUT are acceptable).
   * @param {string} url - The URL endpoint for the request.
   * @param {Record<string, unknown>} [payload] - Optional payload to be sent as the body of the request, JSON-encoded.
   * @return {Promise<VetchResponse<T>>} - The response from the request.
   */
  async sendRequestWithData<T>(
    method: HTTPMethods.POST | HTTPMethods.PATCH | HTTPMethods.PUT,
    url: string,
    payload?: { [key: string]: unknown },
  ): Promise<VetchResponse<T>> {
    const request = {
      url,
      method: method,
      type: ContentType.JSON,
      ...(payload ? { data: payload } : {}),
    } as VetchOptions;

    return await this.sendRequest<T>(request);
  }

  /**
   * Sends a request adding necessary headers, handling authentication, and parsing the response.
   *
   * @param {VetchOptions} request - The options defining the request, including URL, method, headers, and data.
   * @return {Promise<VetchResponse<T>>} - The parsed response from the request.
   */
  async sendRequest<T>(request: VetchOptions): Promise<VetchResponse<T>> {
    const timeout = request.timeout || this.config.timeout;
    const controller = new AbortController();
    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      controller.abort();
    }, timeout);

    try {
      log('Preparing request', request);
      request = await this.prepareRequest(request);
      const fetcRequest = {
        url: request.url,
        method: request.method,
        headers: request.headers as Record<string, string>,
        body: this.prepareBody(request),
        ...(timeout ? { signal: controller.signal } : {}),
      };
      log('Sending request', fetcRequest);

      return await this.parseResponse(
        request,
        await fetch(request.url, fetcRequest),
      );
    } catch (error) {
      if (error instanceof AbortError) {
        log(`Request timed out after ${timeout}`);
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /**
   * Prepares the request with necessary headers, authentication, and query parameters.
   *
   * @param {VetchOptions} request - The initial request options.
   * @return {Promise<VetchOptions>} - The modified request options.
   */
  protected async prepareRequest(request: VetchOptions): Promise<VetchOptions> {
    request.headers = {
      ...request.headers,
      'user-agent': [
        `@vonage/server-sdk/3.0.0`,
        ` node/${process.version.replace('v', '')}`,
        this.config.appendUserAgent ? ` ${this.config.appendUserAgent}` : '',
      ].join(),
    };

    switch (request.type) {
    case ContentType.FORM_URLENCODED:
      request.headers['content-type'] = ContentType.FORM_URLENCODED;
      break;
    case ContentType.JSON:
      request.headers['content-type'] = ContentType.JSON;
      break;
    }

    request = await this.addAuthenticationToRequest(request);

    const url = new URL(request.url as string);
    const params = new URLSearchParams(request.params);

    // copy params into the URL
    for (const [param, value] of params.entries()) {
      url.searchParams.append(param, value);
    }

    request.url = url.toString();
    return request;
  }

  /**
   * Prepares the body for the request based on the content type.
   *
   * @param {VetchOptions} request - The request options.
   * @return {string | undefined} - The prepared request body as a string or undefined.
   */
  protected prepareBody(request: VetchOptions): string | undefined {
    request.headers = {
      ...request?.headers,
    };
    if (!request.data) {
      return;
    }

    if (request.type === ContentType.JSON) {
      return JSON.stringify(request.data);
    }

    if (request.type === ContentType.FORM_URLENCODED) {
      const requestParams = new URLSearchParams(request.data);
      requestParams.sort();
      return requestParams.toString();
    }

    return undefined;
  }

  /**
   * Parses the response based on its content type.
   *
   * @template T - The expected type of the parsed response data.
   *
   * @param {VetchOptions} request - The request options.
   * @param {Response} response - The raw response from the request.
   * @return {Promise<VetchResponse<T>>} - The parsed response.
   */
  protected async parseResponse<T>(
    request: VetchOptions,
    response: Response,
  ): Promise<VetchResponse<T>> {
    let decoded = null;

    if (!response.ok) {
      log('Request failed', response);
      throw new VetchError(
        `Request failed with status code ${response.status}`,
        request,
        response,
      );
    }

    switch (response.headers.get('content-type')) {
    case ContentType.FORM_URLENCODED:
      decoded = response.body
        ? new URLSearchParams(await response.text())
        : '';
      break;
    case ContentType.JSON:
      decoded = await response.json();
      break;
    default:
      decoded = await response.text();
    }

    const responseHeaders = {};

    for (const [header, value] of response.headers.entries()) {
      Object.assign(response, header, value);
    }

    return {
      data: decoded as T,
      config: request,
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
      request: request,
    } as VetchResponse<T>;
  }
}
