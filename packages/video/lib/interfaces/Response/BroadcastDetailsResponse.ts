import { Resolution } from '../../enums/Resolution';
import { StreamMode } from '../../enums/StreamMode';
import { RTMPStream } from '../RTMPStream';

export interface BroadcastDetailsResponse {
    id: string;
    sessionId: string;
    multiBroadcasTag?: string;
    applicationId: string;
    createdAt: number;
    updatedAt: number;
    maxDuration?: number;
    maxBitrate?: number;
    broadcastUrls: {
        hls?: string;
        rtmp: RTMPStream[];
    };
    settings?: {
        hls?: {
            lowLatency?: boolean;
        };
    };
    resolution?: Resolution;
    hasVideo: boolean;
    hasAudio: boolean;
    streamMode: StreamMode;
}
