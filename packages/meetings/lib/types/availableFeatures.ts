/**
 * Represents available features for a meeting room.
 */
export type AvailableFeatures = {
  /**
   * Indicates if recording feature is available in the UI.
   */
  isRecordingAvailable?: boolean;

  /**
   * Indicates if chat feature is available in the UI.
   */
  isChatAvailable?: boolean;

  /**
   * Indicates if whiteboard feature is available in the UI.
   */
  isWhiteboardAvailable?: boolean;

  /**
   * Indicates if the locale switcher is available in the UI.
   */
  isLocaleSwitcherAvailable?: boolean;

  /**
   * Indicates if captions are available in the UI.
   */
  isCaptionsAvailable?: boolean;
};
