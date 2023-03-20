export type SMSMessageRequest = {
    client_ref: string
    message_type: 'text'
    text: string
    to: string
    from: string
    channel: 'sms'
}
