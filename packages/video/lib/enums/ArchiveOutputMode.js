/**
 * Enum representing different output modes for video archives.
 * @enum {string}
 */
export const ArchiveOutputMode = Object.freeze({
  /**
     * Represents the composed output mode where all streams are mixed into one.
     */
  COMPOSED: 'composed',
  /**
     * Represents the individual output mode where each stream is recorded separately.
     */
  INDIVIDUAL: 'individual'
});
