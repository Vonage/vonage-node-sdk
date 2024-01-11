import { TTSLanguages, TTSVoices } from '../../enums';

/**
 * Represents parameters for playing Text-to-Speech (TTS) in a call.
 */
export type PlayTTSParameters = {
  /**
   * The text to be converted to speech and played in the call.
   */
  text: string;

  /**
   * The language in which the text should be spoken. Optional.
   */
  language?: TTSLanguages;

  /**
   * The style or voice variant for the TTS. Optional.
   */
  style?: number;

  /**
   * Indicates if premium TTS features should be used. Optional.
   */
  premium?: boolean;

  /**
   * The name of the specific TTS voice to use. Optional.
   */
  voiceName?: TTSVoices;

  /**
   * The number of times to loop the TTS playback. Optional.
   */
  loop?: number;

  /**
   * The audio level for the TTS playback. Optional.
   */
  level?: string;
};
