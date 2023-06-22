import { EventType, MeetingType } from '../enums';

export interface RoomExpiredInterface {
    event: EventType.ROOM_EXPIRED
    room_id: string
    room_type: MeetingType
    expires_at: string
    created_at: string
}
