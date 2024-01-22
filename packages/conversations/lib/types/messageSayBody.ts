export type MessageSayBody = {
  /**
   * Volume level
   */
  level: number;

  /**
   * Number of times to repeat the audio
   */
  loop: number;

  /**
   * Queue the audio
   */
  queue: boolean;

  /**
   * The name of the voice to use
   */
  voiceName: string;

  /**
   * The language of the voice
   */
  language: string;

  /**
   * The style of the voice
   */
  style: number;

  /**
   * Whether to use the premium voice
   */
  premium: boolean;

  /**
   * The text to say
   */
  text: string;

  /**
   * Whether to use SSML
   */
  ssml: boolean;
}
