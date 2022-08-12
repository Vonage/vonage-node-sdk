export interface MessagesSendResponse {
    message_uuid: string
}

export interface MessagesStatus {
    message_uuid: string
    to: string
    from: string
    timestamp: string
    status: string
    channel: string
    error?: MessagesError
    usage?: MessagesUsage
}

export interface MessagesError {
    type: string
    title: string
    detail: string
    instance: string
}

export interface MessagesUsage {
    currency: string
    price: string
}
