import { RecordingStatus } from '../enums/index';

/**
 * Represents a recording with associated properties.
 */
export type Recording = {
  /**
   * The unique identifier for the recording.
   */
  id: string;

  /**
   * The unique identifier for the session associated with the recording.
   */
  sessionId: string;

  /**
   * The date and time when the recording started.
   */
  startedAt: string;

  /**
   * The date and time when the recording ended.
   */
  endedAt: string;

  /**
   * The status of the recording.
   */
  status: RecordingStatus;

  /**
   * The URL where the recording can be accessed.
   */
  url: string;
};
