import { ViberService } from '../Viber';

export type ViberFileRequest = {
    client_ref: string
    message_type: 'file'
    file: {
        url: string
        name: string
    }
    to: string
    from: string
    channel: 'viber_service'
    viber_service: ViberService
}
