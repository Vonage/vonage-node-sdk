/**
 * Represents parameters for streaming audio in a call.
 */
export type StreamAudioParameters = {
  /**
   * An array of URLs specifying the audio streams to be played in the call.
   */
  streamUrl: Array<string>;

  /**
   * The number of times to loop the audio stream playback. Optional.
   */
  loop?: number;

  /**
   * The audio level or volume for the streamed audio. Optional.
   */
  level?: number;
};
