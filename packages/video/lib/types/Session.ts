/**
 * Interface representing a session configuration.
 */
export type Session = {
  /**
   * The unique identifier for the session.
   */
  sessionId: string;

  /**
   * The location of the session.
   */
  location: string;

  /**
   * The media mode for the session (e.g., "ROUTED" or "RELAYED").
   */
  mediaMode: string;

  /**
   * The archive mode for the session (e.g., "MANUAL" or "ALWAYS").
   */
  archiveMode: string;
}
