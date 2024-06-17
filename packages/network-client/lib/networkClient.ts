import { AuthenticationType, Client } from '@vonage/server-client';
import { MissingApplicationIdError } from '@vonage/jwt';
import { Purpose, Scope } from './enums';
import {
  NetworkAuthParameters,
  NetworkConfigParameters,
  CIBAResponse,
  NetworkTokenResponse,
} from './types';
import {
  VetchOptions,
  VetchError,
  HTTPMethods,
  ContentType,
} from '@vonage/vetch';
import {
  InvalidPurposeError,
  InvalidScopeError,
  MissingPurposeError,
  MissingScopeError,
} from './errors';

import debug from 'debug';
const log = debug('vonage:network-client');

export class NetworkClient extends Client {
  /**
   * Flags if we are currently getting a token
   */
  protected gettingToken: boolean = false;

  /**
   * The current token
   */
  protected accessToken?: string;

  /**
   * Timestamp until the token expires
   */
  protected expires: number = 0;

  /**
   * The msisdn that will be used for API calls
   */
  protected _msisdn: string;

  /**
   * The purpose for the scope
   */
  protected _purpose?: Purpose;

  /**
   * The scope for the token
   */
  protected _scope?: Scope;

  /**
   * Configuration settings for the client, including default hosts for various services and other request settings.
   */
  protected config: NetworkConfigParameters;

  constructor(auth: NetworkAuthParameters, config?: NetworkConfigParameters) {
    super(auth, config);
    this._msisdn = auth.msisdn;
    this.config = {
      ...super.getConfig() || {},
      networkApiHost: config?.networkApiHost || 'https://api-eu.vonage.com',
      odicHost: config?.odicHost || 'https://oidc.idp.vonage.com',
      redirectUri: config?.redirectUri || '',
    } as NetworkConfigParameters;

    this.accessToken = auth.accessToken;
    this.expires = parseInt(`${auth.expiresIn}`) || 0;
  }

  /**
   * Get the msisdn
   * @return {string} The msisdn
   * @throws {Error} If the msisdn is not set
   */
  get msisdn(): string {
    if (!this._msisdn) {
      throw new Error('You must set the msisdn');
    }

    return this._msisdn;
  }

  /**
   * Get the purpose
   *
   * @return {Purpose} The purpose
   * @throws {MissingPurposeError} If the purpose is not set
   * @throws {InvalidPurposeError} If the purpose is not valid
   */
  get purpose(): Purpose {
    if (!this._purpose) {
      throw new MissingPurposeError();
    }

    if (!Object.values(Purpose).includes(this._purpose)) {
      throw new InvalidPurposeError();
    }

    return this._purpose;
  }

  /**
   * Set the purpose
   * @param {Purpose} value The purpose
   */
  set purpose(value: Purpose) {
    this._purpose = value;
  }

  /**
   * Get the scope
   *
   * @return {Scope} The scope
   * @throws {MissingScopeError} If the scope is not set
   * @throws {InvalidScopeError} If the scope is not valid
   */
  get scope(): Scope {
    if (!this._scope) {
      throw new MissingScopeError();
    }

    if (!Object.values(Scope).includes(this._scope)) {
      throw new InvalidScopeError();
    }

    return this._scope;
  }

  /**
   * Set the scope
   *
   * @param {Scope} value The scope
   * @throws {InvalidScopeError} If the scope is not valid
   * @throws {MissingScopeError} If the scope is not set
   */
  set scope(value: Scope) {
    this._scope = value;
  }

  /**
   * Add authentication to the auth
   *
   * This will make the calls to get a network token if required.
   *
   * @param {VetchOptions} request The request to add authentication to
   * @return {Promise<VetchOptions>} The request with authentication added
   */
  async addAuthenticationToRequest(
    request: VetchOptions,
  ): Promise<VetchOptions> {
    log('Adding authentication to request');
    if (this.gettingToken) {
      log('Not adding any auth headers as we are getting a token');
      return request;
    }

    // Auto refresh the token if it is expired for the CIBA flow
    if (this.authType === AuthenticationType.CIBA
      && !this.accessToken
    ) {
      log('Getting access token following CIBA flow');
      await this.getCIBAToken();
    }

    if (!this.accessToken) {
      throw new Error('No access token is available');
    }

    // No need to log the token, they are very short lived
    log('Adding access Token to request');
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${this.accessToken}`,
    };

    return request;
  }

  /**
   * Build the URL for the OIDC flow
   *
   * @param {string} state The state to use
   * @return {string} The URL for the OIDC flow
   */
  buildOIDCURL(state: string = ''): string {
    if (!this.auth?.applicationId) {
      throw new MissingApplicationIdError();
    }

    if (!this.config.redirectUri) {
      throw new Error('You must set the redirectUri in the config');
    }

    const odicURL = new URL(`${this.config.odicHost}/oauth2/auth`);

    odicURL.searchParams.append('client_id', this.auth?.applicationId);
    odicURL.searchParams.append('response_type', 'code');
    odicURL.searchParams.append(
      'scope',
      `openid dpv:${this.purpose}#${this.scope}`,
    );
    odicURL.searchParams.append('redirect_uri', this.config.redirectUri);
    odicURL.searchParams.append('login_hint', `tel:+${this.msisdn}`);

    if (state) {
      odicURL.searchParams.append('state', state);
    }

    return odicURL.toString();
  }

  /**
   * Exchange the code for a network token
   *
   * @param {string} code The code to exchange
   * @return {Promise<NetworkTokenResponse>} The network token token
   */
  async exchangeCodeForToken(code: string): Promise<NetworkTokenResponse> {
    if (!this.config.redirectUri) {
      throw new Error('You must set the redirectUri in the config');
    }

    try {
      log(`Exchange code for access token using ${code}`);
      this.gettingToken = true;
      const response = await super.sendRequest<NetworkTokenResponse>(
        await super.addJWTToRequest({
          url: `${this.config.networkApiHost}/oauth2/token`,
          method: HTTPMethods.POST,
          type: ContentType.FORM_URLENCODED,
          data: {
            code: code,
            redirect_uri: this.config.redirectUri || '',
            grant_type: 'authorization_code',
          },
        }),
      );

      log('Got access token', response.data);
      return Client.transformers.camelCaseObjectKeys(
        response.data,
        true,
      ) as NetworkTokenResponse;
    } catch (error) {
      if (error instanceof VetchError) {
        const { status } = error.response || {};

        // Provide some help
        switch (status) {
        case 401:
          error.message
              = 'Invalid credentials. Please check that the application id and private key are correct. '
              + 'This could also mean that you have not setup the Network API correctly for your application .';
          break;

        case 400:
          error.message
              = 'It appears you have not enabled the Network API for your account. '
              + 'Please contact your account manager to enable this feature. ';
          break;
        }
      }

      log('Error exchanging code for token', error);
      throw error;
    } finally {
      this.gettingToken = false;
    }
  }

  /**
   * Get the access token for the CIBA flow
   *
   * This is a two step process. First we need to get an CIBA request id,
   * then we can use that to get a network token.
   */
  protected async getCIBAToken(): Promise<void> {
    log('Getting CIBA token');
    // Turn off adding auth headers to the request while we get the token
    this.gettingToken = true;

    const cibaRequestId = await this.getCIBARequestId();
    log(`CIBA request id: ${cibaRequestId}`);

    const tokenData = await this.getCIBAAccessToken(cibaRequestId);

    this.gettingToken = false;
    log('Got token', tokenData);
    this.accessToken = tokenData.access_token;
    this.expires = new Date().getTime() * 1000 + tokenData.expires_in;
    return;
  }

  /**
   * Get a network token
   *
   * @param {string} cibaRequestId The CIBA request id
   * @return {Promise<NetworkTokenResponse>} The network token data
   */
  protected async getCIBAAccessToken(
    cibaRequestId: string,
  ): Promise<NetworkTokenResponse> {
    try {
      log(`Getting Network token for ${cibaRequestId}`);
      const response = await super.sendRequest<NetworkTokenResponse>(
        await super.addJWTToRequest({
          url: `${this.config.networkApiHost}/oauth2/token`,
          method: HTTPMethods.POST,
          type: ContentType.FORM_URLENCODED,
          data: {
            auth_req_id: cibaRequestId,
            grant_type: 'urn:openid:params:grant-type:ciba',
          },
        }),
      );

      log('Got Network token', response.data);
      return response.data;
    } catch (error) {
      if (error instanceof VetchError) {
        const { status } = error.response || {};

        // Provide some help
        switch (status) {
        case 401:
          error.message
              = 'Invalid credentials. Please check that the application id and private key are correct. '
              + 'This could also mean that you have not setup the Network API correctly for your application .';
          break;

        case 400:
          error.message
              = 'It appears you have not enabled the Network API for your account. '
              + 'Please contact your account manager to enable this feature. ';
          break;
        }
      }

      log('Error getting CIBA token', error);
      throw error;
    }
  }

  /**
   * Get an CIBA request id
   *
   * @return {Promise<string>} The CIBA request id
   */
  protected async getCIBARequestId(): Promise<string> {
    try {
      log(`Getting CIBA request id for ${this.msisdn}`);
      const response = await super.sendRequest<CIBAResponse>(
        await super.addJWTToRequest({
          url: `${this.config.networkApiHost}/oauth2/bc-authorize`,
          method: HTTPMethods.POST,
          type: ContentType.FORM_URLENCODED,
          data: {
            login_hint: `tel:+${this.msisdn}`,
            scope: `openid dpv:${this.purpose}#${this.scope}`,
          },
        }),
      );

      log('Got CIBA request', response.data);
      return response.data.auth_req_id;
    } catch (error) {
      if (error instanceof VetchError) {
        const { status } = error.response || {};

        // Provide some help
        switch (status) {
        case 401:
          error.message
              = 'A 401 was returned when trying to get authorization. '
              + 'Some possible reasons for this:'
              + '- The application id or private key are invalid. '
              + '- You have not setup the Network API correctly for your application .';
          break;

        case 400:
          error.message
              = 'It appears you have not enabled the Network API for your account. '
              + 'Please contact your account manager to enable this feature. ';
          break;

        case 404:
          error.message
              = 'A 404 was returned when trying to get authorization. '
              + 'Some possible reasons for this:'
              + '- The network application is not setup correctly. '
              + '- The phone number is not associated with this network. ';
          break;
        }
      }

      log('Error getting CIBA token', error);
      throw error;
    }
  }
}
