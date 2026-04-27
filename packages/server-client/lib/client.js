import fetch from 'node-fetch';
import { Auth } from '@vonage/auth';
import {
  ResponseTypes,

  HTTPMethods,
  ContentType,
  VetchError } from
'@vonage/vetch';
import { AuthenticationType } from './enums/index.js';
import {
  camelCaseObjectKeys,
  kebabCaseObjectKeys,
  snakeCaseObjectKeys,
  omit } from

'./transformers.js';
import debug from 'debug';

const log = debug('vonage:server-client');

export class Client {
  /**
   * Static property containing utility transformers.
   */
  static transformers = {
    'camelCaseObjectKeys': camelCaseObjectKeys,
    'snakeCaseObjectKeys': snakeCaseObjectKeys,
    'kebabCaseObjectKeys': kebabCaseObjectKeys,
    'omit': omit
  };

  /**
   * The type of authentication used for the client's requests.
   */
  authType = AuthenticationType.QUERY_KEY_SECRET;

  /**
   * The authentication instance responsible for generating authentication headers and query parameters.
   */
  auth;

  /**
   * Configuration settings for the client, including default hosts for various services and other request settings.
   */
  config;

  /**
   * Creates a new instance of the Client.
   *
   * @param {AuthInterface | AuthParams} credentials - The authentication credentials or an authentication instance.
   * @param {ConfigParams} [options] - Optional configuration settings for the client.
   */
  constructor(credentials, options) {
    this.auth = !Object.prototype.hasOwnProperty.call(
      credentials,
      'getQueryParams'
    ) ?
    new Auth(credentials) :
    credentials;

    this.config = {
      restHost: options?.restHost || 'https://rest.nexmo.com',
      apiHost: options?.apiHost || 'https://api.nexmo.com',
      videoHost: options?.videoHost || 'https://video.api.vonage.com',
      meetingsHost: options?.meetingsHost || 'https://api-eu.vonage.com',
      identityInsightsHost: options?.identityInsightsHost || 'https://api-eu.vonage.com',
      responseType: options?.responseType || ResponseTypes.json,
      timeout: options?.timeout || null,
      appendUserAgent: options?.appendUserAgent || null
    };
  }

  getConfig() {
    return this.config;
  }

  /**
   * Adds the appropriate authentication headers or parameters to the request based on the authentication type.
   *
   * @param {VetchOptions} request - The request options to which authentication needs to be added.
   * @return {Promise<VetchOptions>} - The request options with the added authentication.
   */
  async addAuthenticationToRequest(
  request)
  {
    log(`adding ${this.authType || 'api key/secret'} to request`);
    if (
    !Object.values(AuthenticationType).includes(
      this.authType
    ))
    {
      throw new Error('No authentication type set');
    }

    if (
    [AuthenticationType.OAUTH2, AuthenticationType.CIBA].includes(
      this.authType
    ))
    {
      throw new Error(
        'OAuth2 and CIBA authentication is not supported for this Client'
      );
    }

    switch (this.authType) {
      case AuthenticationType.BASIC:
        return this.addBasicAuthToRequest(request);

      case AuthenticationType.JWT:
        return this.addJWTToRequest(request);

      case AuthenticationType.QUERY_KEY_SECRET:
        return this.addQueryKeySecretToRequest(request);

      default:
        return this.addQueryKeySecretToRequestBody(request);
    }
  }

  /**
   * Adds API key and secret to the request body.
   *
   * @deprecated use addBasicAuthToRequest instead
   * @param {VetchOptions} request - The request options to which authentication needs to be added.
   * @return {VetchOptions} - The request options with the added authentication.
   */
  async addQueryKeySecretToRequestBody(
  request)
  {
    log('This method is deprecated. Use addBasicAuthToRequest instead');
    return this.addBasicAuthToRequest(request);
  }

  /**
   * Adds API key and secret to the request.
   *
   * @deprecated use addBasicAuthToRequest instead
   * @param {VetchOptions} request - The request options to which authentication needs to be added.
   * @return {VetchOptions} - The request options with the added authentication.
   */
  async addQueryKeySecretToRequest(
  request)
  {
    log('This method is deprecated. Use addBasicAuthToRequest instead');
    return this.addBasicAuthToRequest(request);
  }

  /**
   * Adds a JWT to the request.
   *
   * @param {VetchOptions} request - The request options to which authentication needs to be added.
   * @return {VetchOptions} - The request options with the added authentication.
   */
  async addJWTToRequest(
  request)
  {
    request.headers = Object.assign({}, request.headers, {
      Authorization: await this.auth.createBearerHeader()
    });
    return request;
  }

  /**
   * Adds basic authentication headers to the request.
   *
   * @param {VetchOptions} request - The request options to which authentication needs to be added.
   * @return {VetchOptions} - The request options with the added authentication.
   */
  async addBasicAuthToRequest(
  request)
  {
    request.headers = Object.assign({}, request.headers, {
      Authorization: await this.auth.createBasicHeader()
    });
    return request;
  }

  /**
   * Sends a DELETE request to the specified URL.
   *
   * @param {string} url - The URL endpoint for the DELETE request.
   * @return {Promise<VetchResponse<T>>} - The response from the DELETE request.
   */
  async sendDeleteRequest(url) {
    const request = {
      url,
      method: HTTPMethods.DELETE
    };

    return await this.sendRequest(request);
  }

  /**
   * Sends a POST request with form data to the specified URL.
   *
   * @param {string} url - The URL endpoint for the POST request.
   * @param {Record<string, string>} [payload] - Optional payload containing form data to send with the POST request.
   * @return {Promise<VetchResponse<T>>} - The response from the POST request.
   */
  async sendFormSubmitRequest(
  url,
  payload)
  {
    const request = {
      url,
      method: HTTPMethods.POST,
      type: ContentType.FORM_URLENCODED,
      headers: { Accept: 'application/json' },
      ...JSON.parse(JSON.stringify(payload ? { data: payload } : {}))
    };

    return await this.sendRequest(request);
  }

  /**
   * Sends a GET request to the specified URL with optional query parameters.
   *
   * @param {string} url - The URL endpoint for the GET request.
   * @param {Record<string, unknown>} [queryParams] - Optional query parameters to append to the URL. These should be compatible with Node's URLSearchParams.
   * @return {Promise<VetchResponse<T>>} - The response from the GET request.
   */
  async sendGetRequest(
  url,
  queryParams)
  {
    const request = {
      url,
      method: HTTPMethods.GET,
      ...(queryParams ? { params: queryParams } : {})
    };

    return await this.sendRequest(request);
  }

  /**
   * Sends a PATCH request to the specified URL with an optional payload.
   *
   * @param {string} url - The URL endpoint for the PATCH request.
   * @param {Record<string, unknown>} [payload] - Optional payload to be sent as the body of the PATCH request.
   * @return {Promise<VetchResponse<T>>} - The response from the PATCH request.
   */
  async sendPatchRequest(
  url,
  payload)
  {
    return this.sendRequestWithData(HTTPMethods.PATCH, url, payload);
  }

  /**
   * Sends a POST request to the specified URL with an optional payload.
   *
   * @param {string} url - The URL endpoint for the POST request.
   * @param {Record<string, unknown>} [payload] - Optional payload to be sent as the body of the POST request.
   * @return {Promise<VetchResponse<T>>} - The response from the POST request.
   */
  async sendPostRequest(
  url,
  payload)
  {
    return this.sendRequestWithData(HTTPMethods.POST, url, payload);
  }

  /**
   * Sends a PUT request to the specified URL with an optional payload.
   *
   * @param {string} url - The URL endpoint for the PUT request.
   * @param {Record<string, unknown>} [payload] - Optional payload to be sent as the body of the PUT request.
   * @return {Promise<VetchResponse<T>>} - The response from the PUT request.
   */
  sendPutRequest(
  url,
  payload)
  {
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
  async sendRequestWithData(
  method,
  url,
  payload)
  {
    const request = {
      url,
      method: method,
      type: ContentType.JSON,
      ...(payload ? { data: payload } : {})
    };

    return await this.sendRequest(request);
  }

  /**
   * Sends a request adding necessary headers, handling authentication, and parsing the response.
   *
   * @param {VetchOptions} request - The options defining the request, including URL, method, headers, and data.
   * @return {Promise<VetchResponse<T>>} - The parsed response from the request.
   */
  async sendRequest(request) {
    const timeout = request.timeout || this.config.timeout;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);

    try {
      log('Preparing request', request);
      request = await this.prepareRequest(request);
      const fetcRequest = {
        url: request.url,
        method: request.method,
        headers: request.headers,
        body: this.prepareBody(request),
        ...(timeout ? { signal: controller.signal } : {})
      };
      log('Sending request', fetcRequest);

      return await this.parseResponse(
        request,
        await fetch(request.url, fetcRequest)
      );
    } catch (error) {
      if (error && error?.name === 'AbortError') {
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
  async prepareRequest(request) {
    request.headers = {
      ...request.headers,
      'user-agent': [
      '@vonage/server-sdk/3.0.0',
      ` node/${process.version.replace('v', '')}`,
      this.config.appendUserAgent ? ` ${this.config.appendUserAgent}` : ''].
      join()
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

    log('Request prepared', request);
    if (request.params) {
      request.params = JSON.parse(JSON.stringify(request.params));
    }

    const url = new URL(request.url);

    // copy params into the URL
    for (const [param, value] of Object.entries(request.params || {})) {
      url.searchParams.append(param, `${value}`);
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
  prepareBody(request) {
    request.headers = {
      ...request?.headers
    };
    if (!request.data) {
      return;
    }

    if (request.type === ContentType.JSON) {
      return JSON.stringify(request.data);
    }

    if (request.type === ContentType.FORM_URLENCODED) {
      const requestParams = new URLSearchParams();
      for (const [param, value] of Object.entries(request.data || {})) {
        requestParams.append(param, `${value}`);
      }
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
  async parseResponse(
  request,
  response)
  {
    let decoded = null;
    if (!response.ok) {
      log('Request failed', response);
      throw new VetchError(
        `Request failed with status code ${response.status}`,
        request,
        response
      );
    }
    log('Request succeeded');

    const contentLength = parseInt(response.headers.get('content-length') || '0');
    const [contentType] = (response.headers.get('content-type') || '').split(
      ';'
    );

    log(`Response content type: ${contentType}`);
    try {
      const body = await response.text();

      switch (contentType) {
        case ContentType.FORM_URLENCODED:
          log('Decoding form data');
          decoded = response.body ?
          new URLSearchParams(body) :
          '';
          break;
        case ContentType.JSON:
          log('Decoding JSON');
          decoded = JSON.parse(body);
          break;
        default:
          log('Decoding text');
          decoded = body;
      }
    } catch (error) {
      log('Failed to decode body', error);
      if (contentLength > 0) {
        throw new VetchError(
          'Failed to decode response body',
          request,
          response
        );
      }
    }

    log('Decoded body', decoded);
    const responseHeaders = {};

    for (const [header, value] of response.headers.entries()) {
      Object.assign(response, header, value);
    }

    const result = {
      data: decoded,
      config: request,
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
      request: request
    };

    log('Response', JSON.stringify(result, null, 2));
    return result;
  }
}
