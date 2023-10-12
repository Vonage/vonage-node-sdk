import { TTSVoices } from '../../enums';
import { PlayTTSParameters } from '../Parameters';

/**
 * Represents the parameters for playing text-to-speech (TTS) during a call.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type PlayTTSRequest = {
  /**
   * The name of the TTS voice to use for speech synthesis.
   */
  voice_name?: TTSVoices;
} & Omit<PlayTTSParameters, 'voiceName'>;
