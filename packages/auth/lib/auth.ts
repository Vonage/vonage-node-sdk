import { tokenGenerate, GeneratorOptions } from '@vonage/jwt';
import { createHash, createHmac } from 'crypto';
import { existsSync, readFileSync } from 'fs';
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
  apiKey: string;
  apiSecret: string;
  privateKey?: string;
  applicationId?: string;
  signature: SignedHashParams;
  jwtOptions: GeneratorOptions;

  constructor(opts?: AuthParams) {
    this.apiKey = opts?.apiKey || '';
    this.apiSecret = opts?.apiSecret || '';
    this.signature = opts?.signature || null;
    this.applicationId = opts?.applicationId || null;
    this.jwtOptions = opts?.jwtOptions || {};

    if (existsSync(opts.privateKey)) {
      log('Reading private key file');
      opts.privateKey = readFileSync(opts.privateKey).toString();
    }

    this.privateKey
            = opts.privateKey instanceof Buffer
        ? opts.privateKey.toString()
        : opts.privateKey;
  }

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
    };
  };

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

  createBearerHeader = async (): Promise<string> => {
    log('Creating bearer header');
    return `Bearer ${tokenGenerate(
      this.applicationId,
      this.privateKey,
      this.jwtOptions,
    )}`;
  };

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

    if (!this.signature.algorithm) {
      throw new MissingSignatureError();
    }

    if (!this.signature.secret) {
      throw new MissingApiSecretError();
    }

    if (typeof this.signature.secret !== 'string') {
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
        .update(
          `${stringifiedParamsforSigning}${this.signature.secret}`,
        )
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
