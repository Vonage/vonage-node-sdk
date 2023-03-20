import { MessengerType } from '../Messenger';

export type MessengerVideoRequest = {
    client_ref: string
    message_type: 'video'
    video: {
        url: string
    }
    to: string
    from: string
    channel: 'messenger'
    messenger: MessengerType
}
