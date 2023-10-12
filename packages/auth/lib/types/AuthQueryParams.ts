/**
 * Represents the query parameters used for API request authentication.
 *
 * @deprecated This method of authentication, using API credentials in query
 *     parameters, is outdated and not recommended due to security concerns.
 *     Consider using more secure authentication methods, such as JWT or
 *     signature authentication.
 */
export type AuthQueryParams = {
  /**
   * The API key used to authenticate requests. This value can be found in your
   * Vonage Developer Dashboard.
   */
  api_key: string;

  /**
   * The API secret used to authenticate requests. This value can also be found
   * in your Vonage Developer Dashboard.
   */
  api_secret: string;
};
