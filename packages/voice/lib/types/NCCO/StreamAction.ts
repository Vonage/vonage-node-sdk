import { NCCOActions } from '../../enums';

/**
 * Represents a Stream action within a Nexmo Call Control Object (NCCO). This action
 * allows streaming audio content to a call.
 */
export type StreamAction = {
  /**
   * The action type, which is always set to 'stream'.
   */
  action: NCCOActions.STREAM;

  /**
   * An array of URLs pointing to the audio streams to be played during the call.
   */
  streamUrl: Array<string>;

  /**
   * (Optional) The audio level at which the stream should be played. Valid values
   * range from -1 (quietest) to 1 (loudest).
   */
  level?: number;

  /**
   * (Optional) If set to `true`, allows barge-in, which means the caller can interrupt
   * the stream by speaking. Default is `false`.
   */
  bargeIn?: boolean;

  /**
   * (Optional) The number of times the audio stream should be looped. If not specified, the stream will not loop.
   */
  loop?: number;
};
