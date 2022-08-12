import { AudioMessage } from '../interfaces/AudioMessage'
import { AudioObject } from '../interfaces/AudioObject'

export abstract class AbstractAudioMessageObject implements AudioMessage {
    /* tslint:disable-next-line */
    public message_type: string = 'audio'
    public channel: string
    public audio: AudioObject
    public to: string
    public from: string
    /* tslint:disable-next-line */
    public client_ref?: string

    constructor(
        audio: AudioObject,
        to: string,
        from: string,
        clientRef?: string
    ) {
        this.audio = audio
        this.to = to
        this.from = from
        this.client_ref = clientRef
    }
}
