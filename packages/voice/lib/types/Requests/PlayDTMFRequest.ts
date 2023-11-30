import { PlayDTMFParameters } from '../Parameters/PlayDTMFParameters';

/**
 * Represents the parameters for playing DTMF (Dual-Tone Multi-Frequency) tones during a call.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type PlayDTMFRequest = PlayDTMFParameters;
