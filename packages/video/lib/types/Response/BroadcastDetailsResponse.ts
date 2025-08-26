import { StreamMode, Resolution } from '../../enums/index.js';
import { RTMPStream } from '../RTMPStream.js';

/**
 * Represents HLS settings for a live streaming broadcast.
 */
export type HlsSettings = {
  /**
   * Whether to enable low-latency mode for the HLS stream.
   */
  lowLatency?: boolean;
};

/**
 * Represents the response containing details about a live streaming broadcast.
 */
export type BroadcastDetailsResponse = {
  /**
   * The unique ID for the broadcast.
   */
  id: string;

  /**
   * The Vonage Video session ID associated with the broadcast.
   */
  sessionId: string;

  /**
   * The unique tag for simultaneous broadcasts (if one was set).
   */
  multiBroadcasTag?: string;

  /**
   * The Vonage Application UUID.
   */
  applicationId: string;

  /**
   * The time the broadcast started, expressed in milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).
   */
  createdAt: number;

  /**
   * The timestamp when the broadcast was last updated, expressed in milliseconds since the Unix epoch.
   */
  updatedAt: number;

  /**
   * The maximum duration for the broadcast (if one was set), in seconds.
   */
  maxDuration?: number;

  /**
   * The maximum bitrate for the stream.
   */
  maxBitrate?: number;

  /**
   * An object containing details about the HLS and RTMP broadcasts.
   */
  broadcastUrls: {
    /**
     * The URL for the HLS broadcast.
     */
    hls?: string;

    /**
     * An array of RTMP streams.
     */
    rtmp: RTMPStream[];
  };

  /**
   * An object containing settings for HLS.
   */
  settings?: {
    /**
     * HLS settings.
     */
    hls?: HlsSettings;
  };

  /**
   * The resolution of the broadcast, if set.
   */
  resolution?: Resolution;

  /**
   * Indicates whether the broadcast has video.
   */
  hasVideo: boolean;

  /**
   * Indicates whether the broadcast has audio.
   */
  hasAudio: boolean;

  /**
   * The stream mode for the broadcast.
   */
  streamMode: StreamMode;
};
