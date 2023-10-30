
/**
 * Represents an audio object.
 *
 * An audio object typically includes a URL pointing to an audio file and an optional caption.
 *
 * @deprecated Please use types instead of interfaces.
 * @ignore
 */
export interface AudioObject {
  /**
   * The URL of the audio file.
   */
  url: string;

  /**
   * An optional caption to accompany the audio.
   */
  caption?: string;
}
