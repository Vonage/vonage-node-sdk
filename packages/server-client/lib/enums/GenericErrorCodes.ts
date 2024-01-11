/**
 * Enum representing the different types of generic error codes
 * that might be returned by the Vonage APIs.
 */
export enum GenericErrors {
  /**
   * The account has insufficient funds. This request could not be performed
   * due to your account balance being low. Top up your account in the Vonage
   * Dashboard.
   */
  LOW_BALANCE = 'low-balance',

  /**
   * The provided credentials are incorrect or missing. You did not provide
   * correct credentials. Check your authentication credentials; they can be
   * found in the Vonage Dashboard.
   */
  UNAUTHORIZED = 'unauthorized',

  /**
   * The authenticated user does not have access to the requested resource. Your
   * account does not have permission to perform this action. Check that you're
   * using the correct credentials and that your account has this feature enabled.
   */
  FORBIDDEN = 'forbidden',

  /**
   * The requested resource could not be found. The requested resource does not
   * exist, or you do not have access to it. Check both the URI that you're
   * requesting and your authentication credentials.
   */
  NOT_FOUND = 'not-found',

  /**
   * The account is not provisioned for the requested service. The credentials
   * provided do not have access to the requested product. Check that your API
   * key is correct and has been whitelisted.
   */
  UNPROVISIONED = 'unprovisioned',

  /**
   * The account has been suspended. This account has been suspended. Contact
   * support@api.vonage.com for more information.
   */
  ACCOUNT_SUSPENDED = 'account-suspended',

  /**
   * The provided JWT has expired. The JWT provided has expired. Generate a
   * new JWT with an expiration date in the future.
   */
  JWT_EXPIRED = 'jwt-expired',

  /**
   * The provided JWT has been revoked. The JWT provided has been revoked.
   * Generate a new JWT using your private key.
   */
  JWT_REVOKED = 'jwt-revoked',

  /**
   * The provided API key is invalid. The API key provided does not exist in
   * our system, or you do not have access. Modify your request to provide a
   * valid API key.
   */
  INVALID_API_KEY = 'invalid-api-key',

  /**
   * The provided signature is invalid. The signature provided did not
   * validate. Check your signature secret and ensure you're following the
   * correct signing process.
   */
  INVALID_SIGNATURE = 'invalid-signature',

  /**
   * The request originates from an unauthorized IP address. The source IP
   * address of the request is not in our allow list. Make a request from an
   * allowed IP address, or add your current IP to the list of authorized
   * addresses.
   */
  INVALID_IP = 'invalid-ip',

  /**
   * Multiple authentication methods were provided in the request.
   * Provide exactly one authentication method.
   */
  MULTIPLE_AUTH_METHODS = 'multiple-auth-methods',

  /**
   * The provided ID in the request is invalid. The ID provided does not exist
   * in our system. Modify your request to provide a valid ID.
   */
  INVALID_ID = 'invalid-id',

  /**
   * The provided JSON in the request body is invalid. The request body did
   * not contain valid JSON. Send a JSON request body, including a
   * Content-Type header of application/json.
   */
  INVALID_JSON = 'invalid-json',

  /**
   * The HTTP verb used in the request is not allowed. This endpoint does not
   * support the HTTP verb that you requested. Read the API documentation to
   * see which verbs your desired endpoint supports.
   */
  WRONG_VERB = 'wrong-verb',

  /**
   * The provided Accept header in the request is invalid. Invalid Accept
   * header provided. Most Vonage APIs only send back application/json. Check
   * the API documentation for the specific API you're working with for a
   * complete list of supported data types.
   */
  ACCEPT_HEADER = 'accept-header',

  /**
   * The provided Content-Type header in the request is invalid. Invalid
   * Content-Type header provided. Most Vonage APIs only accept application/
   * json. Check the API documentation for the specific API you're working
   * with for a complete list of supported data types.
   */
  CONTENT_TYPE_HEADER = 'content-type-header',

  /**
   * The requested service is unavailable due to legal reasons. Vonage APIs
   * are unavailable in the following areas due to international sanctions:
   * Sudan, Syria, Crimea, North Korea, Iran, and Cuba.
   */
  UNAVAILABLE_LEGAL = 'unavailable-legal',

  /**
   * The application associated with the request has been suspended. This
   * application has been suspended. Re-enable the application or create a new
   * application to use.
   */
  APPLICATION_SUSPENDED = 'application-suspended',
}
