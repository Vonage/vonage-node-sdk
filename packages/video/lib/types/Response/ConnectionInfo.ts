import { ConnectionState } from '../../enums/index.js';

/**
 * Represents a single connection in a Vonage Video session.
 */
export type ConnectionInfo = {
  /**
   * The unique ID of the connection.
   */
  connectionId: string;

  /**
   * The state of the connection.
   */
  connectionState: ConnectionState;

  /**
   * The timestamp when the connection was created, expressed in milliseconds
   * since the Unix epoch (January 1, 1970, 00:00:00 UTC).
   */
  createdAt: number;
};
