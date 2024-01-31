import {
  Client,
  AuthenticationType,
} from '@vonage/server-client';
import { Purpose, Scope } from './enums';
import {
  NetworkAuthParameters,
  NetworkConfigParameters,
  ODICResponse,
  NetworkTokenResponse,
} from './types';
import {
  VetchOptions,
  VetchError,
  HTTPMethods,
  ContentType,
} from '@vonage/vetch';
import { InvalidPurposeError, InvalidScopeError, MissingPurposeError, MissingScopeError } from './errors';
import debug from 'debug';
const log = debug('vonage:network-client');

export class NetworkAuth extends Client {
  /**
   * Always set this as none as we will be using the network network token.
   */
  protected authType: AuthenticationType = AuthenticationType.NONE;

  /**
   * Flags if we are currently getting a token
   */
  protected gettingToken: boolean = false;

  /**
   * The current token
   */
  protected networkToken?: string;

  /**
   * Timestamp until the token expires
   */
  protected expires: number = 0;

  /**
   * The msisdn that will be used for API calls
   */
  protected msisdn: string;

  /**
   * The purpose for the scope
   */
  protected purpose?: Purpose;

  /**
   * The scope for the token
   */
  protected scope?: Scope;

  /**
   * Configuration settings for the client, including default hosts for various services and other request settings.
   */
  protected config: NetworkConfigParameters;

  constructor(
    auth: NetworkAuthParameters,
    config?: NetworkConfigParameters,
  ) {
    super(auth, config);

    this.msisdn = auth.msisdn;
    this.config = super.config as NetworkConfigParameters;
    this.config.networkAuthHost = config?.networkAuthHost || 'https://api.nexmo.com';
  }

  get isExpired(): boolean {
    const now = new Date().getTime() * 1000;
    return now < this.expires;
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
    if (this.gettingToken) {
      log('Not adding any auth headers as we are getting a token');
      return request;
    }

    if (!this.networkToken && !this.isExpired) {
      log('Getting network token');
      await this.getToken();
    }

    log('Using network token');
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${this.networkToken}`,
    };

    return request;
  }

  /**
   * Get a network token
   *
   * This is a two step process. First we need to get an ODIC request id,
   * then we can use that to get a network token.
   */
  async getToken(): Promise<void> {
    log('Getting token');
    if (!this.purpose) {
      throw new MissingPurposeError();
    }

    if (!this.scope) {
      throw new MissingScopeError();
    }

    if (!Object.values(Purpose).includes(this.purpose)) {
      throw new InvalidPurposeError();
    }

    if (!Object.values(Scope).includes(this.scope)) {
      throw new InvalidScopeError();
    }

    // Turn off adding auth headers to the request while we get the token
    this.gettingToken = true;

    const odicRequestId = await this.getODICRequest();
    const tokenData = await this.getNetworkToken(odicRequestId);

    this.gettingToken = false;
    log('Got token', tokenData);
    this.networkToken = tokenData.access_token;
    this.expires = (new Date().getTime() * 1000) + tokenData.expires_in;
    return;
  }

  /**
  * Get a network token
  *
  * @param {string} odicRequestId The ODIC request id
  * @return {Promise<NetworkTokenResponse>} The network token data
  */
  async getNetworkToken(odicRequestId: string): Promise<NetworkTokenResponse> {
    try {
      log('Getting Network token');
      const response = await super.sendRequest<NetworkTokenResponse>(
        await super.addJWTToRequest({
          url: `${this.config.networkAuthHost}/oauth2/bc-authorize`,
          method: HTTPMethods.POST,
          type: ContentType.FORM_URLENCODED,
          headers: {
            Authorization: await super.auth.createBasicHeader(),
          },
          data: {
            auth_request_id: odicRequestId,
            grant_type: 'urn:openid:params:grant-type:ciba',
          },
        }),
      );

      log('Got Network token', response.data);
      return response.data;
    } catch (error) {
      log('Error getting ODIC token', error);
      if (error instanceof VetchError) {
        const { status } = error.response || {};

        // Provide some help
        switch(status) {
        case 401:
          error.message = `Invalid credentials. Please check that the application id and private key are correct. `
            + `This could also mean that you have not setup the Network API correctly for your application .`;
          break;

        case 400:
          error.message = `It appears you have not enabled the Network API for your account. `
            + 'Please contact your account manager to enable this feature. ';
          break;

        case 404:
          error.message = `It appears the network application is not setup correctly. `
            + `Please check your dashbaord to ensure the Network API is setup correctly.`;

        }
      }

      throw error;
    }
  }

  /**
  * Get an ODIC request id
  *
  * @return {Promise<string>} The ODIC request id
  */
  async getODICRequest(): Promise<string> {
    try {
      log('Getting ODIC request');
      const response = await super.sendRequest<ODICResponse>({
        url: `${this.config.networkAuthHost}/oauth2/bc-authorize`,
        method: HTTPMethods.POST,
        type: ContentType.FORM_URLENCODED,
        headers: {
          Authorization: await super.auth.createBasicHeader(),
        },
        data: {
          login_hint: `tel:+${this.msisdn}`,
          scope: `openid dpv:${this.purpose}#${this.scope}`,
        },
      });

      log('Got ODIC request', response.data);
      return response.data.auth_request_id;
    } catch (error) {
      log('Error getting ODIC token', error);
      if (error instanceof VetchError) {
        const { status } = error.response || {};

        // Provide some help
        switch(status) {
        case 401:
          error.message = `Invalid credentials. Please check that the application id and private key are correct. `
            + `This could also mean that you have not setup the Network API correctly for your application .`;
          break;

        case 400:
          error.message = `It appears you have not enabled the Network API for your account. `
            + 'Please contact your account manager to enable this feature. ';
          break;

        case 404:
          error.message = `It appears the network application is not setup correctly. `
            + `Please check your dashbaord to ensure the Network API is setup correctly.`;

        }
      }

      throw error;
    }
  }

}
