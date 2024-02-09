export type SessionUser = {
    /**
     * The ID of the user.
     */
    id: string;

    /**
     * The name of the user.
     */
    name: string;
}

export type Session = {
  /**
   * The ID of the session.
   */
  id: string;

  /**
   * User for the session
   */
  user: SessionUser;

  /**
   * The API Key for the session.
   */
  apiKey: string;

  /**
   * Session properties
   */
  properties: {
    /**
     * Time to live in seconds.
     */
    ttl: number;
  }
}
