/**
 * Represents a response containing the details of a created session.
 */
export type CreateSessionResponse = {
  /**
   * The unique session ID.
   */
  session_id: string;

  /**
   * The project ID associated with the session.
   */
  project_id: string;

  /**
   * The creation date and time of the session in string format.
   */
  create_dt: string;

  /**
   * The URL of the media server associated with the session.
   */
  media_server_url: string;
};
