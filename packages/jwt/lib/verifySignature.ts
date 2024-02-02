import jsonwebtoken from 'jsonwebtoken';
import debug from 'debug';
import { MissingPrivateKeyError, InvalidPrivateKeyError } from './errors';

const { verify } = jsonwebtoken;
const log = debug('vonage:jwt:verifySignature');

/**
 * Verifies a JWT token
 *
 * @function
 * @param {string} jwt - The JSON Web Token to verify.
 * @param {string | Buffer} privateKey - The private key used to verify the JWT
 *  signature.
 * @return {boolean} Returns true if the JWT signature is verified successfully,
 *  otherwise returns false.
 * @throws {MissingPrivateKeyError} Throws an error if the private key is
 *  missing.
 * @throws {InvalidPrivateKeyError} Throws an error if the private key is not
 *  a string or buffer.
 *
 * @example
 * Validate a JWT token
 *
 * ```js
 * const privateKey = fs.readFileSync('./private.key');
 * if (verifySignature(token, privateKey)) {
 *   console.log('JWT signature verified.');
 * } else {
 *   console.log('JWT signature verification failed.');
 * }
 * ```
 */
export const verifySignature = (
  jwt: string,
  privateKey: string | Buffer,
): boolean => {
  if (!privateKey) {
    throw new MissingPrivateKeyError();
  }

  if (typeof privateKey !== 'string' && !(privateKey instanceof Buffer)) {
    throw new InvalidPrivateKeyError();
  }

  try {
    verify(jwt, privateKey, {
      algorithms: ['HS256'],
    });
    return true;
  } catch (error) {
    log('Error when verifying token', error);
  }

  return false;
};
