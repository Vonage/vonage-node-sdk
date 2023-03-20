export type MMSVcardRequest = {
    client_ref: string
    message_type: 'vcard'
    vcard: {
        url: string
    }
    to: string
    from: string
    channel: 'mms'
}
