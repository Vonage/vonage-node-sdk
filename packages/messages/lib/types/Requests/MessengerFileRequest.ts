import { MessengerType } from '../Messenger';

export type MessengerFileRequest = {
    client_ref: string
    message_type: 'file'
    file: {
        url: string
    }
    to: string
    from: string
    channel: 'messenger'
    messenger: MessengerType
}
