import { MessengerType } from '../Messenger';

export type MessengerTextRequest = {
    client_ref: string
    message_type: 'text'
    text: string
    to: string
    from: string
    channel: 'messenger'
    messenger: MessengerType
}
