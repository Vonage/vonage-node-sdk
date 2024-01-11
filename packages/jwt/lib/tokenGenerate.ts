import { GeneratorOptions, Claims } from './types';
import jsonwebtoken from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import {
  MissingApplicationIdError,
  MissingPrivateKeyError,
  InvalidPrivateKeyError,
  InvalidApplicationIdError,
} from './errors';
import debug from 'debug';

const { sign } = jsonwebtoken;

const log = debug('vonage:jwt:tokenGenerate');

/**
 * Validates the generator options and constructs the claims object.
 *
 * @param {GeneratorOptions} [opts] - The generator options.
 * @return {Claims} - The claims object.
 * @private
 */
export const validateOptions = (opts?: GeneratorOptions): Claims => {
  const now = parseInt((Date.now() / 1000).toString(), 10);

  const ttl = opts?.ttl || 900;
  if (opts?.ttl) {
    delete opts.ttl;
  }

  const claims: Claims = {
    ...opts,
    jti: opts?.jti || uuidv4(),
    iat: opts?.issued_at || now,
    exp: opts?.exp && opts?.exp > now ? opts.exp : now + ttl,
  };

  if (opts?.subject) {
    claims.sub = opts.subject;
  }

  if (opts?.acl) {
    claims.acl = opts.acl;
  }

  return claims;
};

/**
 * Generates a JWT token.
 *
 * @param {string} applicationId - The application id.
 * @param {string | Buffer} privateKey - The private key as a string or buffer.
 * @param {GeneratorOptions} [opts] - Optional generator options.
 * @return {string} - Returns the signed JWT token.
 * @throws {MissingApplicationIdError} Throws an error if applicationId is missing.
 * @throws {MissingPrivateKeyError} Throws an error if privateKey is missing.
 * @throws {InvalidApplicationIdError} Throws an error if applicationId is not a string.
 * @throws {InvalidPrivateKeyError} Throws an error if privateKey is not a string or buffer.
 * @see {@link https://developer.vonage.com/en/getting-started/concepts/authentication#json-web-tokens}
 *
 * @example
 * Generate a JWT token with default claims.
 *
 * ```js
 * const privateKey = fs.readFileSync(__dirname + '/private.key');
 * const token = tokenGenerate(applicationId, privateKey);
 * ```
 *
 * @example
 * Generate a JWT token with custom claims.
 *
 * ```js
 * const privateKey = fs.readFileSync(__dirname + '/private.key');
 * const token = tokenGenerate(applicationId, privateKey, {
 *   subject: 'my-subject',
 *   acl: {
 *    paths: {
 *      '/*\/users\/**': {},
 *      '/*\/conversations\/**': {},
 *      '/*\/sessions\/**': {},
 *    },
 *   },
 * });
 * ```
 */
export const tokenGenerate = (
  applicationId: string,
  privateKey: string | Buffer,
  opts?: GeneratorOptions,
): string => {
  log(`Application id: ${applicationId}`);
  log(`Private key: ${privateKey}`);
  if (!applicationId) {
    throw new MissingApplicationIdError();
  }

  if (!privateKey) {
    throw new MissingPrivateKeyError();
  }

  if (typeof applicationId !== 'string') {
    throw new InvalidApplicationIdError();
  }

  if (typeof privateKey !== 'string' && !(privateKey instanceof Buffer)) {
    throw new InvalidPrivateKeyError();
  }

  const claims = validateOptions(opts);
  log('Claims', claims);
  claims.application_id = applicationId;

  return sign(claims, privateKey, {
    algorithm: 'RS256',
    header: { typ: 'JWT', alg: 'RS256' },
  });
};
