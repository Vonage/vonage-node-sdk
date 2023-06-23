import { RecordingStatus } from '../enums/index';

export type Recording = {
    id: string
    sessionId: string
    startedAt: string
    endedAt: string
    status: RecordingStatus
    url: string
}
