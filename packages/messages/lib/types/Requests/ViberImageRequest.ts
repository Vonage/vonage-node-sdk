import { ViberService } from '../Viber';

export type ViberImageRequest = {
    client_ref: string
    message_type: 'image'
    image: {
        url: string
        caption?: string
    }
    to: string
    from: string
    channel: 'viber_service'
    viber_service: ViberService
}
