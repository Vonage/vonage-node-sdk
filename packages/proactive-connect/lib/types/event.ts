import { EventTypes } from '../enums/eventTypes';

export type Event = {
    occurredAt: string
    type: EventTypes
    id: string
    jobId: string
    srcCtx: string
    data: unknown
    runId: string
    recipientId: string
}
