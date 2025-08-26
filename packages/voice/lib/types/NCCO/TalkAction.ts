import { NCCOActions, TTSLanguages } from '../../enums/index.js';

/**
 * Represents a Talk action within a Nexmo Call Control Object (NCCO). This action
 * allows text-to-speech (TTS) to be spoken during a call.
 */
export type TalkAction = {
  /**
   * The action type, which is always set to 'talk'.
   */
  action: NCCOActions.TALK;

  /**
   * The text that should be spoken using text-to-speech (TTS) during the call.
   */
  text: string;

  /**
   * (Optional) If set to `true`, allows barge-in, which means the caller can interrupt the TTS
   * speech by speaking. Default is `false`.
   */
  bargeIn?: boolean;

  /**
   * (Optional) The number of times the TTS speech should be looped. If not specified, the TTS speech will not loop.
   */
  loop?: number;

  /**
   * (Optional) The voice level at which the TTS speech should be spoken. This can be a string
   * representation of the level.
   */
  level?: string;

  /**
   * (Optional) The language in which the TTS speech should be spoken. Use one of the supported TTS language codes.
   */
  language?: TTSLanguages | string;

  /**
   * (Optional) The style or type of voice to use for TTS speech. This can be a string representing the voice style.
   */
  style?: string;

  /**
   * (Optional) If set to `true`, indicates that premium TTS should be used for the speech. Default is `false`.
   */
  premium?: boolean;
};
