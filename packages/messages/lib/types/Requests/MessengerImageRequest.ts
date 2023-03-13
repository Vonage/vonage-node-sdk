import { MessengerType } from '../Messenger';

export type MessengerImageRequest = {
    client_ref: string
    message_type: 'image'
    image: {
        url: string
    }
    to: string
    from: string
    channel: 'messenger'
    messenger: MessengerType
}
