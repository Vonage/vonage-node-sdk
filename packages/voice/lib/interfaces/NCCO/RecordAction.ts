import { RecordingFormat } from "../../enums/NCCO/RecordingFormat";

export interface RecordAction {
    action: string
    format?: RecordingFormat
    split?: string
    channels?: number
    endOnSilence?: number
    endOnKey?: string
    timeOut?: number
    beepStart?: boolean
    eventUrl?: string[]
    eventMethod?: string
}