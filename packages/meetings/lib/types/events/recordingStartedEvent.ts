import { EventType } from '../../enums';

/**
 * Represents an event for recording started.
 *
 * @remarks
 * The SDK does not have any functionality for process incoming webhook events.
 * The types are provided here to help with code completion and TS Compiling
 */
export type RecordingStarted = {
  /**
   * The type of event, which is 'recording:started'.
   */
  event: EventType.RECORDING_STARTED;

  /**
   * The unique identifier for the recording.
   */
  recording_id: string;

  /**
   * The unique identifier for the session associated with the recording.
   */
  session_id: string;
}

/**
 * @deprecated Exported as interface in error. Please use RecordingStarted
 */
export interface RecordingStartedInterface extends RecordingStarted {}
