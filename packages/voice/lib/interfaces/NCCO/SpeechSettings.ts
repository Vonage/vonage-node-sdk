export interface SpeechSettings {
    uuid?: string;
    endOnSilence?: boolean;
    language?: string;
    context?: string[];
    startTimeout?: number;
    maxDuration?: number;
    saveAudio?: boolean;
}
