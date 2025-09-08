import { LayoutType, Resolution, StreamMode } from '../enums/index.js';
import { RTMPStream } from './RTMPStream.js';

/**
 * Interface representing configuration options for HLS streaming.
 */
export type HLSConfig = {
  /**
   * Whether to enable low-latency mode for the HLS stream.
   */
  lowLatency?: boolean;

  /**
   * Whether to enable DVR functionality (rewinding, pausing, and resuming) in players that support it.
   */
  dvr?: boolean;
}

/**
 * Interface representing configuration options for different types of broadcast streams (HLS and RTMP).
 */
export type BroadcastOutputs = {
  /**
   * Configuration options for HLS streaming.
   */
  hls?: HLSConfig;

  /**
   * Configuration options for RTMP streaming.
   */
  rtmp: RTMPStream[];
}

/**
 * Interface representing configuration options for a live streaming broadcast.
 */
export type BroadcastConfig = {
  /**
   * The unique tag for simultaneous broadcasts (if one was set).
   */
  multiBroadcastTag?: string;

  /**
   * The maximum duration for the broadcast, in seconds. The broadcast will
   * automatically stop when the maximum duration is reached.
   */
  maxDuration?: number;

  /**
   * The maximum bitrate for the stream.
   */
  maxBitrate?: number;

  /**
   * The layout type for the broadcast.
   */
  layout?: LayoutType;

  /**
   * Whether the broadcast has audio.
   */
  hasAudio?: boolean;

  /**
   * Whether the broadcast has video.
   */
  hasVideo?: boolean;

  /**
   * Configuration options for different types of broadcast streams (HLS and RTMP).
   */
  outputs: BroadcastOutputs;

  /**
   * The stream mode for the broadcast.
   */
  streamMode?: StreamMode;

  /**
   * The resolution of the broadcast.
   */
  resolution?: Resolution;
}
