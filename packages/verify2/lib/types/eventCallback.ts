import { Channels, EventStatus } from '../enums';

export type EventCallback = {
    request_id: string
    triggerd_at: string
    type: string
    channel: Channels
    status: EventStatus
    finalized_at: string
    client_ref?: string
}
