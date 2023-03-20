export type WhatsAppStickerIdRequest = {
    client_ref: string
    message_type: 'sticker'
    sticker: {
        id: string
    }
    to: string
    from: string
    channel: 'whatsapp'
}
