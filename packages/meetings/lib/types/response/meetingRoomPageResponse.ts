import { APILinks, APILink } from '@vonage/server-client';
import { MeetingRoomResponse } from './meetingRoomResponse';

export type MeetingRoomPageResponse = {
    page_size: number
    total_items: number
    _embedded: Array<MeetingRoomResponse>
    _links: APILinks & { next?: APILink; prev?: APILink; start?: APILink }
}
