import { StreamAudioParameters } from '../Parameters/StreamAudioParameters.js';

/**
 * Represents the parameters for streaming audio during a call.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type StreamAudioRequest = {
  /**
   * An array of stream URLs for the audio source.
   */
  stream_url: Array<string>;
} & Omit<StreamAudioParameters, 'streamUrl'>;
