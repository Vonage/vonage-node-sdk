import { MessageClassEnum, TypeEnum } from '../../enums/index';

export interface SMSRequestBody {
    to: string
    from: string
    text?: string
    body?: string
    'type?': TypeEnum
    'ttl?': number
    'client_ref?': string
    'callback?': string
    'message_class?': number
    'udh?': string
    'protocol-id'?: number
    'status-report-req'?: boolean
    'message-class'?: MessageClassEnum
    'client-ref'?: string
    'entity-id'?: string
    'content-id'?: string
}
