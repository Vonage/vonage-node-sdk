/**
 * Enum representing different output modes for video archives.
 */
export enum ArchiveOutputMode {
  /**
   * Represents the composed output mode where all streams are mixed into one.
   */
  COMPOSED = 'composed',

  /**
   * Represents the individual output mode where each stream is recorded separately.
   */
  INDIVIDUAL = 'individual',
}
