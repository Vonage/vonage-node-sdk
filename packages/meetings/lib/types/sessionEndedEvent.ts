import { EventType } from '../enums';

export interface SessionEndedInterface {
    event: EventType.SESSION_ENDED
    session_id: string
    room_id: string
    started_at: string
    ended_at: string
}
