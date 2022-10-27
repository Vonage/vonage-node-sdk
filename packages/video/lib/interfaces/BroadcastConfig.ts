import { LayoutType } from '../enums/LayoutType';
import { Resolution } from '../enums/Resolution';
import { StreamMode } from '../enums/StreamMode';
import { RTMPStream } from './RTMPStream';

export interface BroadcastConfig {
  sessionId: string;
  multiBroadcastTag?: string;
  maxDuration?: number;
  maxBitrate?: number;
  layout?: LayoutType;
  hasAudio?: boolean;
  hasVideo?: boolean;
  outputs: {
    hls?: {
      lowLatency?: boolean;
      dvr?: boolean;
    };
    rtmp: RTMPStream[];
  };
  streamMode?: StreamMode;
  resolution?: Resolution;
}
