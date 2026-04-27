import { NCCOActions } from '../../enums/';

/**
 * Represents a Stream action in a Nexmo Call Control Object (NCCO).
 *
 * This action allows streaming audio into the call.
 */
export class Stream {
  /**
   * The action type for this NCCO action.
   */
  action = NCCOActions.STREAM;

  /**
   * An array of stream URLs to play audio from.
   */
  streamUrl;

  /**
   * The audio level at which to play the stream (optional).
   */
  level;

  /**
   * Indicates whether the stream should allow barge-in (optional).
   */
  bargeIn;

  /**
   * The number of times to loop the audio (optional).
   */
  loop;

  /**
   * Creates a new Stream action.
   *
   * @param {string} streamUrl - The URL of the audio stream.
   * @param {number} [level] - The audio level at which to play the stream (optional).
   * @param {boolean} [bargeIn] - Indicates whether the stream should allow barge-in (optional).
   * @param {number} [loop] - The number of times to loop the audio (optional).
   */
  constructor(
  streamUrl,
  level,
  bargeIn,
  loop)
  {
    this.streamUrl = [streamUrl];

    if (level) {
      this.level = level;
    }
    if (bargeIn) {
      this.bargeIn = bargeIn;
    }
    if (loop) {
      this.loop = loop;
    }
  }

  /**
   * Serializes the Stream action to a Nexmo Call Control Object (NCCO).
   *
   * @return {StreamAction} - The serialized Stream action.
   */
  serializeToNCCO() {
    const data = {
      action: NCCOActions.STREAM,
      streamUrl: this.streamUrl
    };

    if (this.level) {
      data.level = this.level;
    }
    if (this.bargeIn) {
      data.bargeIn = this.bargeIn;
    }
    if (this.loop) {
      data.loop = this.loop;
    }

    return data;
  }
}
