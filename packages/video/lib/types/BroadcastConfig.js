/**
 * Interface representing configuration options for HLS streaming.
 *
 * @typedef {Object} HLSConfig
 * @property {boolean} [lowLatency] - Whether to enable low-latency mode for the HLS stream.
 * @property {boolean} [dvr] - Whether to enable DVR functionality (rewinding, pausing, and resuming) in players that support it.
 */

/**
 * Interface representing configuration options for different types of broadcast streams (HLS and RTMP).
 *
 * @typedef {Object} BroadcastOutputs
 * @property {HLSConfig} [hls] - Configuration options for HLS streaming.
 * @property {Array.<RTMPStream>} rtmp - Configuration options for RTMP streaming.
 */

/**
 * Interface representing configuration options for a live streaming broadcast.
 *
 * @typedef {Object} BroadcastConfig
 * @property {string} [multiBroadcastTag] - The unique tag for simultaneous broadcasts (if one was set).
 * @property {number} [maxDuration] - The maximum duration for the broadcast, in seconds. The broadcast will automatically stop when the maximum duration is reached.
 * @property {number} [maxBitrate] - The maximum bitrate for the stream.
 * @property {LayoutType} [layout] - The layout type for the broadcast.
 * @property {boolean} [hasAudio] - Whether the broadcast has audio.
 * @property {boolean} [hasVideo] - Whether the broadcast has video.
 * @property {BroadcastOutputs} outputs - Configuration options for different types of broadcast streams (HLS and RTMP).
 * @property {StreamMode} [streamMode] - The stream mode for the broadcast.
 * @property {Resolution} [resolution] - The resolution of the broadcast.
 */

export {};
