import { ViberService } from '../Viber';

export type ViberTextRequest = {
    client_ref: string
    message_type: 'text'
    text: string
    to: string
    from: string
    channel: 'viber_service'
    viber_service: ViberService
}
