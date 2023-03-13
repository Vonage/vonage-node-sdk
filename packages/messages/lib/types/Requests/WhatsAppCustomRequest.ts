export type WhatsAppCustomRequest = {
    client_ref: string
    message_type: 'custom'
    custom: Record<string, unknown>
    to: string
    from: string
    channel: 'whatsapp'
}
