import { GeneratorOptions } from '@vonage/jwt';
import { SignedHashParams } from './SignedHashParams';

/**
 * Represents the authentication parameters required for API requests.
 */
export type AuthParams = {
  /**
   * The API key used to authenticate requests. It may be omitted if using JWT
   * or signature authentication. This value can be found in your Vonage
   * Developer Dashboard.
   */
  apiKey?: string | null;

  /**
   * The API secret used to authenticate requests. It may be omitted if using
   * JWT or signature authentication. This value can be found in your Vonage
   * Developer Dashboard.
   */
  apiSecret?: string | null;

  /**
   * The private key used for JWT authentication. It can be provided as a string
   * (read from a file) or as a Buffer (opened directly from a file). This key
   * is downloaded when you create an application in your Vonage Developer
   * Dashboard and may be omitted if using API key/secret or signature
   * authentication.
   */
  privateKey?: string | Buffer | null;

  /**
   * The application ID used in conjunction with the private key for JWT
   * authentication. It may be omitted if using API key/secret or signature
   * authentication. This value can be found in your Vonage Developer Dashboard.
   */
  applicationId?: string | null;

  /**
   * An object containing parameters for signature authentication, including the
   * secret and algorithm. It may be omitted if using API key/secret or JWT
   * authentication.
   */
  signature?: SignedHashParams | null;

  /**
   * Options for generating JWTs, including the JWT issuer (application ID)
   * and subject (user ID).
   */
  jwtOptions?: GeneratorOptions;
};
