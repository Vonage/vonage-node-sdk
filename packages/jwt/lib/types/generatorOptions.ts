import { ACL } from './acl';

/**
 * Claims to pass in for the token generator.
 */
export type GeneratorOptions = {
  /**
   * Time to live in seconds.
   */
  ttl?: number;

  /**
   * The time at which the JWT was issued.
   */
  issued_at?: number;

  /**
   * Subject of the token.
   */
  subject?: string;

  /**
   * JSON Web Token ID.
   */
  jti?: string;

  /**
   * The time before which the JWT is not yet valid.
   */
  notBefore?: number;

  /**
   * Access control list.
   */
  acl?: ACL;

  /**
   * Additional properties and values.
   */
  key?: string;

  /**
   * Additional custom properties and values.
   */
  [key: string]: unknown | number | string;
};
