import { EventType } from '../enums';

export interface SessionStartedInterface {
    event: EventType.SESSION_STARTED
    session_id: string
    room_id: string
    started_at: string
}
