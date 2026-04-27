/**
 * Enum representing different captioning status.
 * @enum {string}
 */
export const CaptionStatus = Object.freeze({
  /**
     * Indicates that captioning has started.
     */
  STARTED: 'started',
  /**
     * Indicates that captioning has stopped.
     */
  STOPPED: 'stopped',
  /**
     * Indicates that captioning has been paused.
     */
  PAUSED: 'paused',
  /**
     * Indicates that captioning has failed.
     */
  FAILED: 'failed'
});
