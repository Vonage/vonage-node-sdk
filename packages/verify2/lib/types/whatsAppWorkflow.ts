import { Channels } from '../enums';

export type WhatsAppWorkflow = {
    channel: Channels.WHATSAPP
    to: string
    from?: string
}
