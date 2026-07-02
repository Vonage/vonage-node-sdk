/**
 * Enum representing the state of a connection in a Vonage Video session.
 */
export enum ConnectionState {
  /**
   * The connection is in the process of connecting to the session.
   */
  CONNECTING = 'Connecting',

  /**
   * The connection is fully connected to the session.
   */
  CONNECTED = 'Connected',
}
