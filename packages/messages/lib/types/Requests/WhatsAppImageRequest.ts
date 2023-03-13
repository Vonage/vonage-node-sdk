export type WhatsAppImageRequest = {
    client_ref: string
    message_type: 'image'
    image: {
        url: string
        caption?: string
    }
    to: string
    from: string
    channel: 'whatsapp'
}
