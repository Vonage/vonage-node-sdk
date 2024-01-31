/**
 * Enum representing the different types of authentication methods
 * supported by the Vonage APIs.
 */
export enum AuthenticationType {
  /**
   * Basic authentication using a base64-encoded string.
   */
  BASIC = 'basic',

  /**
   * JSON Web Token (JWT) authentication.
   */
  JWT = 'jwt',

  /**
   * Authentication using both API key and secret in the request body.
   * @deprecated This method is deprecated.
   */
  KEY_SECRET = 'key_secret',

  /**
   * Authentication using API key and secret in the query parameters.
   */
  QUERY_KEY_SECRET = 'query_key_secret',

  /**
   * HMAC signature-based authentication.
   */
  SIGNATURE = 'signature',

  /**
   * CIBA authentication
   */
  CIBA = 'ciba',

  /**
   * OAuth2 authentication.
   */
  OAUTH2 = 'oauth2',
}
