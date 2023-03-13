import { MessengerType } from '../Messenger';

export type MessengerAudioRequest = {
    client_ref: string
    message_type: 'audio'
    audio: {
        url: string
    }
    to: string
    from: string
    channel: 'messenger'
    messenger: MessengerType
}
