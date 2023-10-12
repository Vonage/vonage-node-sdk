import { ACL } from './acl';

/**
 * JWT claims.
 *
 * @see {@link https://developer.vonage.com/en/getting-started/concepts/authentication#claims}
 */
export type Claims = {
  /**
   * Expiration time of the JWT.
   */
  exp?: number;

  /**
   * Subject claim, identifies the principal that is the subject of the JWT.
   */
  sub?: string;

  /**
   * JWT ID claim, provides a unique identifier for the JWT.
   */
  jti?: string;

  /**
   * Not Before claim, identifies the time before which the JWT must not be
   * accepted for processing.
   */
  nbf?: number;

  /**
   * Access Control List claim, provides access control information.
   */
  acl?: ACL;

  /**
   * Issued At claim, identifies the time at which the JWT was issued.
   */
  iat?: number;

  /**
   * Application ID claim, identifies the application that is the subject of
   * the JWT.
   */
  application_id?: string;
};
