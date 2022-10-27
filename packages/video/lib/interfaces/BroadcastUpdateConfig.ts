export interface BroadcastUpdateConfig {
    broadcastId: string;
    hasAudio?: boolean;
    hasVideo?: boolean;
    addStream?: string;
    removeStream?: string;   
}