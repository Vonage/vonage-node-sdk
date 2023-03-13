import { ViberService } from '../Viber';

export type ViberVideoRequest = {
    client_ref: string
    message_type: 'video'
    video: {
        url: string
        caption?: string
        thumb_url?: string
    }
    to: string
    from: string
    channel: 'viber_service'
    viber_service: ViberService
}
