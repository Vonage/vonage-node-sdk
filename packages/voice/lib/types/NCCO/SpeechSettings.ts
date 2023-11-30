/**
 * Represents settings for speech recognition within a Nexmo Call Control Object (NCCO).
 */
export interface SpeechSettings {
  /**
   * (Optional) A unique identifier (UUID) for the speech recognition session. If not provided, Nexmo generates one.
   */
  uuid?: string;

  /**
   * (Optional) If set to `true`, speech recognition will end when there is a period of silence. Default is `false`.
   */
  endOnSilence?: boolean;

  /**
   * (Optional) The language in which speech recognition should be performed. This should be
   * a language code or identifier.
   */
  language?: string;

  /**
   * (Optional) An array of context strings that provide additional information for speech
   * recognition. Contexts can help improve recognition accuracy.
   */
  context?: string[];

  /**
   * (Optional) The maximum time (in seconds) to wait for the start of speech recognition after the audio begins.
   */
  startTimeout?: number;

  /**
   * (Optional) The maximum duration (in seconds) for speech recognition in a single session. If
   * recognition exceeds this duration, it will be terminated.
   */
  maxDuration?: number;

  /**
   * (Optional) If set to `true`, the audio of the recognized speech will be saved. Default is `false`.
   */
  saveAudio?: boolean;
}
