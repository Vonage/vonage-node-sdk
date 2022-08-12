import { OutboundCall } from './OutboundCall'

export interface OutboundCallWithAnswerURL extends OutboundCall {
    answer_url: string[]
}
