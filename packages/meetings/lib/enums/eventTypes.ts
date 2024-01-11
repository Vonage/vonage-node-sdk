/**
 * Enum representing different event types.
 */
export enum EventType {
  /**
   * Event type for a room that has expired.
   */
  ROOM_EXPIRED = 'room:expired',

  /**
   * Event type for the start of a session.
   */
  SESSION_STARTED = 'session:started',

  /**
   * Event type for the end of a session.
   */
  SESSION_ENDED = 'session:ended',

  /**
   * Event type for the start of recording.
   */
  RECORDING_STARTED = 'recording:started',

  /**
   * Event type for the end of recording.
   */
  RECORDING_ENDED = 'recording:ended',

  /**
   * Event type for a recording that is ready.
   */
  RECORDING_READY = 'recording:ready',

  /**
   * Event type for a participant joining a session.
   */
  SESSION_PARTICIPANT_JOINED = 'session:participant:joined',

  /**
   * Event type for a participant leaving a session.
   */
  SESSION_PARTICIPANT_LEFT = 'session:participant:left',
}
