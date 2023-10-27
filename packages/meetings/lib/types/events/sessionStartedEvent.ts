import { EventType } from '../../enums';

/**
 * Represents an event for a session starting.
 *
 * @remarks
 * The SDK does not have any functionality for process incoming webhook events.
 * The types are provided here to help with code completion and TS Compiling
 */
export type SessionStarted = {
  /**
   * The type of event, which is 'session:started'.
   */
  event: EventType.SESSION_STARTED;

  /**
   * The unique identifier for the session.
   */
  session_id: string;

  /**
   * The unique identifier for the room associated with the session.
   */
  room_id: string;

  /**
   * The date and time when the session started.
   */
  started_at: string;
}

/**
 * @deprecated Exported as interface in error. Please use SessionStarted
 */
export interface SessionStartedInterface extends SessionStarted {}
