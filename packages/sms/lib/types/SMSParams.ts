import { MessageClassEnum } from '../enums/MessageClassEnum';
import { TypeEnum } from '../enums/TypeEnum';

export interface SMSParams {
    from: string
    to: string
    text?: string
    ttl?: number
    statusReportReq?: boolean
    callback?: string
    messageClass?: MessageClassEnum
    type?: TypeEnum
    body?: string
    udh?: string
    protocolId?: number
    title?: string
    url?: string
    validity?: string
    clientRef?: string
    accountRef?: string
    entityId?: string
    contentId?: string
}
