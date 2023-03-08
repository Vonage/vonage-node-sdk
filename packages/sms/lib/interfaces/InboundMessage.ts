export interface InboundMessage {
    'api-key': string
    msisdn: string
    to: string
    messageId: string
    text: string
    type: string
    keyword: string
    'message-timestamp': string
    timestamp: string
    nonce: string
    concat: string
    'concat-ref': string
    'concat-total': string
    'concat-part': string
    data: string
    udh: string
}
