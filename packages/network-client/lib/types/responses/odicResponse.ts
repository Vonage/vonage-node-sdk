export type ODICResponse = {
  /**
   * ODIC token
   */
  auth_request_id: string;

  /**
   * Seconds until the token expires
   */
  expires_in: number;

  /**
   * This is the minimum polling interval in seconds
   */
  interval?: string;
}
