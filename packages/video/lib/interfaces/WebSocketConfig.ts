import { AudioRate } from '../enums/AudioRate';

export interface WebSocketConfig {
    uri: string
    streams?: string[]
    headers?: {
        [key: string]: string
    }
    audioRate?: AudioRate
}
