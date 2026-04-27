/**
 * Enum representing different stream modes for live streaming broadcasts.
 * @enum {string}
 */
export const StreamMode = Object.freeze({
  /**
     * Streams are selected automatically based on session rules.
     */
  AUTO: 'auto',
  /**
     * Streams are manually selected for inclusion in the broadcast.
     */
  MANUAL: 'manual'
});
