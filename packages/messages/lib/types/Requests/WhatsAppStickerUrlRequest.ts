export type WhatsAppStickerUrlRequest = {
    client_ref: string
    message_type: 'sticker'
    sticker: {
        url: string
    }
    to: string
    from: string
    channel: 'whatsapp'
}
