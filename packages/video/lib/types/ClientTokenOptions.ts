/**
 * Interface representing options for generating a client token.
 */
export type ClientTokenOptions = {
  /**
   * The role associated with the client token (optional).
   */
  role?: string;

  /**
   * Additional data for the client token (optional).
   */
  data?: string;

  /**
   * The expiration time of the client token in seconds (optional).
   */
  expireTime?: number;

  /**
   * An array of initial layout class list for the client token (optional).
   */
  initialLayoutClassList?: string[];
}
