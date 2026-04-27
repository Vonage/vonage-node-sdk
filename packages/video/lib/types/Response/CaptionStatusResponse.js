/**
 * Represents a response containing the status of captions for a live streaming broadcast.
 *
 * @typedef {Object} CaptionStatusResponse
 * @property {string} captionId - The unique ID for the caption.
 * @property {string} applicationId - The Vonage Application UUID.
 * @property {string} sessionId - The Vonage Video session ID associated with the broadcast.
 * @property {CaptionStatus} status - The status of the captions.
 * @property {number} createdAt - The time when the caption was created, expressed in milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).
 * @property {number} updatedAt - The timestamp when the caption was last updated, expressed in milliseconds since the Unix epoch.
 * @property {number} duration - The duration of the caption, in seconds.
 * @property {'en-us'} languageCode - The language code of the captions (e.g., "en-us" for English, US).
 * @property {'aws-transcribe'} provider - The caption provider (e.g., "aws-transcribe").
 * @property {string} [reason] - An optional reason for the caption status.
 */

export {};
