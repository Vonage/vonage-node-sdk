export type CIBAResponse = {
  /**
   * CIBA ODIC token
   */
  auth_req_id: string;

  /**
   * Seconds until the token expires
   */
  expires_in: number;

  /**
   * This is the minimum polling interval in seconds
   */
  interval?: string;
};
