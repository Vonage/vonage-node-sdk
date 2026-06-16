import { ConnectionInfo } from './ConnectionInfo.js';

/**
 * Represents the response from listing connections in a Vonage Video session.
 */
export type MultiConnectionResponse = {
  /**
   * The total number of connections in the session.
   */
  count: number;

  /**
   * Your Vonage Application ID.
   */
  applicationId: string;

  /**
   * The session ID.
   */
  sessionId: string;

  /**
   * An array of connection objects, listed from oldest to newest.
   */
  items: ConnectionInfo[];
};
