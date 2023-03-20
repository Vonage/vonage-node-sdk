export type WhatsAppAudioRequest = {
    client_ref: string
    message_type: 'audio'
    audio: {
        url: string
    }
    to: string
    from: string
    channel: 'whatsapp'
}
