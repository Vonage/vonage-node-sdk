import { EventType } from '../enums';

export interface RecordingStartedInterface {
    event: EventType.RECORDING_STARTED
    recording_id: string
    session_id: string
}
