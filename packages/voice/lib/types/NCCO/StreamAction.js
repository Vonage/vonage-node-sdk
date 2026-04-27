/**
 * Represents a Stream action within a Nexmo Call Control Object (NCCO). This action
 * allows streaming audio content to a call.
 *
 * @typedef {Object} StreamAction
 * @property {NCCOActions.STREAM} action - The action type, which is always set to 'stream'.
 * @property {Array} streamUrl - An array of URLs pointing to the audio streams to be played during the call.
 * @property {number} [level] - (Optional) The audio level at which the stream should be played. Valid values range from -1 (quietest) to 1 (loudest).
 * @property {boolean} [bargeIn] - (Optional) If set to `true`, allows barge-in, which means the caller can interrupt the stream by speaking. Default is `false`.
 * @property {number} [loop] - (Optional) The number of times the audio stream should be looped. If not specified, the stream will not loop.
 */

export {};
