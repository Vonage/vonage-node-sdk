/**
 * Represents options for recording a meeting.
 */
export type RecordingOptions = {
  /**
   * Indicates whether recording should be automatically started for all sessions.
   */
  autoRecord: boolean;

  /**
   * Indicates whether recording should be limited to the owner's screen or any shared screen.
   */
  recordOnlyOwner: boolean;
};
