/**
 * Represents HLS settings for a live streaming broadcast.
 *
 * @typedef {Object} HlsSettings
 * @property {boolean} [lowLatency] - Whether to enable low-latency mode for the HLS stream.
 */

/**
 * Represents the response containing details about a live streaming broadcast.
 *
 * @typedef {Object} BroadcastDetailsResponse
 * @property {string} id - The unique ID for the broadcast.
 * @property {string} sessionId - The Vonage Video session ID associated with the broadcast.
 * @property {string} [multiBroadcasTag] - The unique tag for simultaneous broadcasts (if one was set).
 * @property {string} applicationId - The Vonage Application UUID.
 * @property {number} createdAt - The time the broadcast started, expressed in milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).
 * @property {number} updatedAt - The timestamp when the broadcast was last updated, expressed in milliseconds since the Unix epoch.
 * @property {number} [maxDuration] - The maximum duration for the broadcast (if one was set), in seconds.
 * @property {number} [maxBitrate] - The maximum bitrate for the stream.
 * @property {Object} broadcastUrls - An object containing details about the HLS and RTMP broadcasts. The URL for the HLS broadcast. An array of RTMP streams.
 * @property {Object} [settings] - An object containing settings for HLS. HLS settings.
 * @property {Resolution} [resolution] - The resolution of the broadcast, if set.
 * @property {boolean} hasVideo - Indicates whether the broadcast has video.
 * @property {boolean} hasAudio - Indicates whether the broadcast has audio.
 * @property {StreamMode} streamMode - The stream mode for the broadcast.
 */

export {};
