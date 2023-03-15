import { Channels, RequestWorkflowStatus } from '../enums';

export type RequestStatusCallbackWorkflow = {
    channel: Channels
    initiated_at: string
    status: RequestWorkflowStatus
}
