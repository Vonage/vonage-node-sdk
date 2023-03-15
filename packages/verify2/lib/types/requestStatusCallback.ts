import { RequestStatus } from '../enums';
import { RequestStatusCallbackWorkflow } from './requestStatusCallbackWorkflow';

export type RequestStatusCallback = {
    request_id: string
    submitted_at: string
    status: RequestStatus
    type: string
    channel_timeout: number
    workflow: Array<RequestStatusCallbackWorkflow>
}
