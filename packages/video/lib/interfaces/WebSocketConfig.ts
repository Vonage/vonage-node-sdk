import { AudioRate } from '../enums/AudioRate';

export interface WebsocketConfig {
    uri: string
    streams?: string[]
    headers?: {
        [key: string]: string
    }
    audioRate?: AudioRate
}
