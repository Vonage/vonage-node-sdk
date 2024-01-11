import { EventType } from '../../enums';

/**
 * Represents an event for recording ended.
 *
 * @remarks
 * The SDK does not have any functionality for process incoming webhook events.
 * The types are provided here to help with code completion and TS Compiling
 */
export type RecordingEnded = {
  /**
   * The type of event, which is 'recording:ended'.
   */
  event: EventType.RECORDING_ENDED;

  /**
   * The unique identifier for the recording.
   */
  recording_id: string;

  /**
   * The unique identifier for the session associated with the recording.
   */
  session_id: string;

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
}

/**
 * @deprecated Exported as interface in error. Please use RecordingEnded
 */
export interface RecordingEndedInterface extends RecordingEnded {}
