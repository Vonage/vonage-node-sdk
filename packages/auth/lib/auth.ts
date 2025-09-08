import { tokenGenerate, GeneratorOptions } from '@vonage/jwt';
import { createHash, createHmac } from 'node:crypto';
import { PathLike, existsSync, readFileSync } from 'node:fs';
import {
  AuthParams,
  AuthQueryParams,
  SignedHashParams,
  AuthSignedParams,
} from './types/index.js';
import { AuthInterface } from './interfaces/index.js';
import { AlgorithmTypes } from './enums/index.js';
import {
  MissingApiKeyError,
  MissingApiSecretError,
  InvalidApiKeyError,
  InvalidApiSecretError,
  MissingSignatureError,
  InvalidSignatureAlgorithmError,
} from './errors/index.js';
import debug from 'debug';

const log = debug('vonage:auth');

/**
 * Authentication class used for generating Authentication headers and query parameters.
 *
 * @remarks
 * This client is only available as a standalone client. It cannot be
 * instantiated from the server-sdk package.
 *
 * @example
 * Create a standard authentication object.
 *
 * ```ts
 * import { Auth } from '@vonage/auth';
 *
 * const auth = new Auth({
 *   apiKey: VONAGE_API_KEY,
 *   apiSecret: VONAGE_API_SECRET,
 *   applicationId: VONAGE_APPLICATION_ID,
 *   privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
 * });
 * ```
 */
export class Auth implements AuthInterface {
  /**
   * @property {string} apiKey - The API key used for authentication.
   */
  apiKey: string;

  /**
   * @property {string} apiSecret - The API secret used for authentication.
   */
  apiSecret: string;

  /**
   * @property {string | null} [privateKey] - The private key used for JWT
   *     authentication, either as a string or read from a file.
   */
  privateKey?: string | Buffer | null;

  /**
   * @property {string | null} [applicationId] - The application ID used for
   *     JWT authentication.
   */
  applicationId?: string | null;

  /**
   * @property {SignedHashParams | null} [signature] - The signature parameters
   *     used for signature authentication.
   */
  signature?: SignedHashParams | null;

  /**
   * @property {GeneratorOptions} jwtOptions - Options used for generating JWTs.
   */
  jwtOptions: GeneratorOptions;

  constructor(opts?: AuthParams) {
    this.apiKey = opts?.apiKey || '';
    this.apiSecret = opts?.apiSecret || '';
    this.signature = opts?.signature || null;
    this.applicationId = opts?.applicationId || null;
    this.jwtOptions = opts?.jwtOptions || {};

    let privateKey = opts?.privateKey;
    if (existsSync(opts?.privateKey as PathLike)) {
      log('Reading private key file');
      privateKey = readFileSync(opts?.privateKey as PathLike).toString();
    }

    this.privateKey = privateKey instanceof Buffer ? privateKey.toString() : privateKey;
  }

  /**
   * Generates query parameters for authentication, optionally merging with
   * provided parameters.
   *
   *
   * @param {T} [params] - Additional parameters to merge with the
   *     generated authentication query parameters.
   *
   * @return {Promise<AuthQueryParams>} - A promise that resolves
   *     with the merged authentication query parameters.
   *
   * @throws {MissingApiKeyError} - Thrown when the API key is missing.
   * @throws {MissingApiSecretError} - Thrown when the API secret is missing.
   * @throws {InvalidApiKeyError} - Thrown when the API key is not a valid string.
   * @throws {InvalidApiSecretError} - Thrown when the API secret is not a valid string.
   *
   * @example
   * Generate query parameters
   *
   * ```ts
   * const queryParams = await auth.getQueryParams();
   * ```
   *
   * @example
   * Generate query parameters and merge with additional Parameters
   *
   * ```ts
   * const queryParams = await auth.getQueryParams({
   *   to: '15555555555',
   *   from: '15555555556',
   *   text: 'Hello from Vonage SMS API'
   * });
   * ```
   */
  getQueryParams = async <T>(
    params?: AuthQueryParams & T,
  ): Promise<AuthQueryParams & T> => {
    if (!this.apiKey) {
      throw new MissingApiKeyError();
    }

    if (!this.apiSecret) {
      throw new MissingApiSecretError();
    }

    if (typeof this.apiKey !== 'string') {
      throw new InvalidApiKeyError();
    }

    if (typeof this.apiSecret !== 'string') {
      throw new InvalidApiSecretError();
    }

    return {
      ...params,
      api_key: this.apiKey,
      api_secret: this.apiSecret,
    } as AuthQueryParams & T;
  };

  /**
   * Generates a basic authentication header.
   *
   * @return {Promise<string>} - A promise that resolves with the
   *     generated basic authentication header.
   *
   * @throws {MissingApiKeyError} - Thrown when the API key is missing.
   * @throws {MissingApiSecretError} - Thrown when the API secret is missing.
   * @throws {InvalidApiKeyError} - Thrown when the API key is not a valid string.
   * @throws {InvalidApiSecretError} - Thrown when the API secret is not a valid string.
   *
   * @example
   * Generate a basic authentication headers
   *
   * ```ts
   * const basicAuthHeader = await auth.createBasicHeader();
   * ```
   */
  createBasicHeader = async (): Promise<string> => {
    log('Creating basic auth header');
    if (!this.apiKey) {
      throw new MissingApiKeyError();
    }

    if (!this.apiSecret) {
      throw new MissingApiSecretError();
    }

    if (typeof this.apiKey !== 'string') {
      throw new InvalidApiKeyError();
    }

    if (typeof this.apiSecret !== 'string') {
      throw new InvalidApiSecretError();
    }

    const buf = Buffer.from(`${this.apiKey}:${this.apiSecret}`);
    return `Basic ${buf.toString('base64')}`;
  };

  /**
   * Generates a bearer authentication header.
   *
   * @return {Promise<string>} - A promise that resolves with the
   *     generated bearer authentication header.
   *
   * @example
   * Generate a bearer authentication headers
   *
   * ```ts
   * const bearerAuthHeader = await auth.createBearerHeader();
   * ```
   */
  createBearerHeader = async (): Promise<string> => {
    log('Creating bearer header');
    return `Bearer ${tokenGenerate(
      this.applicationId || '',
      this.privateKey || '',
      this.jwtOptions,
    )}`;
  };

  /**
   * Generates a signature hash for authentication, merging it with
   * provided parameters.
   *
   * @template T - Type of the parameters to merge with.
   * @param {T} params - Parameters to merge with the generated
   *     signature hash.
   * @return {Promise<AuthSignedParams>} - A promise that resolves
   *     with the merged signature hash and parameters.
   *
   * @throws {MissingApiKeyError} - Thrown when the API key is missing.
   * @throws {InvalidApiKeyError} - Thrown when the API key is not a valid string.
   * @throws {MissingSignatureError} - Thrown when the signature algorithm is missing.
   * @throws {MissingApiSecretError} - Thrown when the API secret is missing.
   * @throws {InvalidApiSecretError} - Thrown when the API secret is not a valid string.
   * @throws {InvalidSignatureAlgorithmError} - Thrown when an invalid signature algorithm is provided.
   *
   * @example
   * Generate a signature hash
   *
   * ```ts
   * const signatureHash = await auth.createSignatureHash({
   *   to: '15555555555',
   *   from: '15555555556',
   *   text: 'Hello from Vonage SMS API',
   *   timestamp: '1516878400',
   *   sig: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6',
   * });
   * ```
   */
  createSignatureHash = async <T>(
    params: AuthSignedParams & T,
  ): Promise<AuthSignedParams & T> => {
    log('Creating signature hash');
    if (!this.apiKey) {
      throw new MissingApiKeyError();
    }

    if (typeof this.apiKey !== 'string') {
      throw new InvalidApiKeyError();
    }

    if (!this.signature?.algorithm) {
      throw new MissingSignatureError();
    }

    if (!this.signature?.secret) {
      throw new MissingApiSecretError();
    }

    if (typeof this.signature?.secret !== 'string') {
      throw new InvalidApiSecretError();
    }

    const returnParams: AuthSignedParams & T = {
      ...params,
      api_key: this.apiKey,
    };

    // Add the current timestamp to the parameters list with the key
    // 'timestamp'. This should be an integer containing the number of seconds
    // since the epoch (UNIX time))
    if (!returnParams.timestamp) {
      returnParams.timestamp = Math.floor(Date.now() / 1000).toString();
    }

    const sortedParams = new URLSearchParams(returnParams);
    sortedParams.sort();

    const stringifiedParamsforSigning = sortedParams
      .toString()
      .replace(/(&|=)/gi, '_');

    switch (this.signature.algorithm) {
    case AlgorithmTypes.md5hash:
      returnParams.sig = createHash('md5')
        .update(`${stringifiedParamsforSigning}${this.signature.secret}`)
        .digest('hex');
      break;

    case AlgorithmTypes.md5hmac:
      returnParams.sig = createHmac('md5', this.signature.secret)
        .update(stringifiedParamsforSigning)
        .digest('hex');
      break;

    case AlgorithmTypes.sha1hmac:
      returnParams.sig = createHmac('sha1', this.signature.secret)
        .update(stringifiedParamsforSigning)
        .digest('hex');
      break;

    case AlgorithmTypes.sha256hmac:
      returnParams.sig = createHmac('sha256', this.signature.secret)
        .update(stringifiedParamsforSigning)
        .digest('hex');
      break;

    case AlgorithmTypes.sha512hmac:
      returnParams.sig = createHmac('sha512', this.signature.secret)
        .update(stringifiedParamsforSigning)
        .digest('hex');
      break;
    default:
      throw new InvalidSignatureAlgorithmError();
    }

    return returnParams;
  };
}
