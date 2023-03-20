export type WhatsAppFileRequest = {
    client_ref: string
    message_type: 'file'
    file: {
        url: string
        caption?: string
    }
    to: string
    from: string
    channel: 'whatsapp'
}
