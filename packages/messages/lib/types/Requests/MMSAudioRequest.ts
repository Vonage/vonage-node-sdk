export type MMSAudioRequest = {
    client_ref: string
    message_type: 'audio'
    audio: {
        url: string
        caption?: string
    }
    to: string
    from: string
    channel: 'mms'
}
