/**
 * Interface representing claims for a client token.
 */
export type ClientTokenClaims = {
  /**
   * The scope of the token.
   */
  scope: string;

  /**
   * The session ID associated with the token.
   */
  session_id: string;

  /**
   * The role of the token.
   */
  role: string;

  /**
   * The initial layout class list.
   */
  initial_layout_class_list: string;

  /**
   * Additional data for the token (optional).
   */
  data?: string;

  /**
   * The expiration time of the token (optional).
   */
  exp?: number;

  /**
   * Connection data associated with the token (optional).
   */
  connection_data?: string;

  /**
   * The subject of the token.
   */
  sub: string;

  /**
   * Access control list (ACL) for paths.
   */
  acl: {
    /**
     * Paths and associated objects in the ACL.
     */
    paths: {
      [key: string]: object;
    };
  };
}
