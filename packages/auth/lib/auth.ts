import { tokenGenerate, GeneratorOptions } from '@vonage/jwt';
import { createHash, createHmac } from 'crypto';
import { PathLike, existsSync, readFileSync } from 'fs';
import {
  AuthParams,
  AuthQueryParams,
  SignedHashParams,
  AuthSignedParams,
} from './types/index';
import { AuthInterface } from './interfaces/index';
import { AlgorithmTypes } from './enums';
import {
  MissingApiKeyError,
  MissingApiSecretError,
  InvalidApiKeyError,
  InvalidApiSecretError,
  MissingSignatureError,
  InvalidSignatureAlgorithmError,
} from './errors/index';
import debug from 'debug';

const log = debug('vonage:auth');

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
  privateKey?: string | null;

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

    this.privateKey
      = privateKey instanceof Buffer
        ? privateKey.toString()
        : (opts?.privateKey as string);
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
