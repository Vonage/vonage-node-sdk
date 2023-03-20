export type WhatsAppVideoRequest = {
    client_ref: string
    message_type: 'video'
    video: {
        url: string
        caption?: string
    }
    to: string
    from: string
    channel: 'whatsapp'
}
