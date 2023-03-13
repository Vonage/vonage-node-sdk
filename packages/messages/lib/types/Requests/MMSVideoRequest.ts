export type MMSVideoRequest = {
    client_ref: string
    message_type: 'video'
    video: {
        url: string
        caption?: string
    }
    to: string
    from: string
    channel: 'mms'
}
