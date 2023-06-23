import { EventType } from '../enums';

export interface RecordingEndedInterface {
    event: EventType.RECORDING_ENDED
    recording_id: string
    session_id: string
    started_at: string
    ended_at: string
    duration: number
}
