/* eslint-disable @typescript-eslint/no-empty-object-type */
import { EventType } from '../../enums';

/**
 * Represents an event type for recording readiness.
 *
 * @remarks
 * The SDK does not have any functionality for process incoming webhook events.
 * The types are provided here to help with code completion and TS Compiling
 */
export type RecordingReady = {
  /**
   * The type of event, which is 'recording:ready'.
   */
  event: EventType.RECORDING_READY;

  /**
   * The unique identifier for the recording.
   */
  recording_id: string;

  /**
   * The unique identifier for the session associated with the recording.
   */
  session_id: string;

  /**
   * The unique identifier for the room associated with the recording.
   */
  room_id: string;

  /**
   * The date and time when the recording started.
   */
  started_at: string;

  /**
   * The date and time when the recording ended.
   */
  ended_at: string;

  /**
   * The duration of the recording in seconds.
   */
  duration: number;

  /**
   * The URL where the recording can be accessed.
   */
  url: string;
}

/**
 * @deprecated Exported as interface in error. Please use RecordingReady
 */
export interface RecordingReadyInterface extends RecordingReady {}
