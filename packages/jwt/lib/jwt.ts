import { tokenGenerate, validateOptions } from './tokenGenerate.js';
import { verifySignature } from './verifySignature.js';
import { GeneratorOptions, Claims } from './types/index.js';

/**
 * Interface defining the methods for JWT generation.
 *
 * @ignore
 * @deprecated Using the class is no longer needed
 */
export interface JWTInterface {
  /**
   * Generates a JWT token.
   *
   * @param {string} applicationId - The application ID.
   * @param {string | Buffer} privateKey - The private key for signing the JWT.
   * @param {GeneratorOptions} [opts] - Optional parameters for token generation.
   * @returns {void}
   */
  tokenGenerate(
    applicationId: string,
    privateKey: string | Buffer,
    opts?: GeneratorOptions
  ): void;
}

/**
 * Class implementing the JWTInterface for JWT operations.
 *
 * @ignore
 * @deprecated Using the class is no longer needed
 */
export class JWT implements JWTInterface {
  /**
   * Generates a JWT token.
   *
   * @param {string} applicationId - The application ID.
   * @param {string | Buffer} privateKey - The private key for signing the JWT.
   * @param {GeneratorOptions} [opts] - Optional parameters for token generation.
   * @return {string} - The generated JWT token.
   */
  tokenGenerate(
    applicationId: string,
    privateKey: string | Buffer,
    opts?: GeneratorOptions,
  ): string {
    return tokenGenerate(applicationId, privateKey, opts);
  }
  /**
   * Verifies the signature of a JWT token.
   *
   * @param {string} jwt - The JWT token to verify.
   * @param {string | Buffer} privateKey - The private key used for verification.
   * @return {boolean} - True if the signature is valid, false otherwise.
   */
  verifySignature(jwt: string, privateKey: string | Buffer): boolean {
    return verifySignature(jwt, privateKey);
  }

  /**
   * Validates the options provided for JWT generation.
   *
   * @param {GeneratorOptions} [opts] - The options to validate.
   * @return {Claims} - The validated claims.
   */
  private validateOptions(opts?: GeneratorOptions): Claims {
    return validateOptions(opts);
  }
}
