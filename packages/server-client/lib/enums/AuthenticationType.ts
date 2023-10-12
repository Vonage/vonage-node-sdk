/**
 * Enum representing the different types of authentication methods
 * supported by the Vonage APIs.
 *
 * @enum {string}
 */
export enum AuthenticationType {
    /**
     * @description Basic authentication using a base64-encoded string.
     */
    BASIC = 'basic',

    /**
     * @description JSON Web Token (JWT) authentication.
     */
    JWT = 'jwt',

    /**
     * @description Authentication using both API key and secret in the request body.
     * @deprecated This method is deprecated.
     */
    KEY_SECRET = 'key_secret',

    /**
     * @description Authentication using API key and secret in the query parameters.
     */
    QUERY_KEY_SECRET = 'query_key_secret',

    /**
     * @description HMAC signature-based authentication.
     */
    SIGNATURE = 'signature',
}
