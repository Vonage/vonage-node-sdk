import { AudioObject } from '../../interfaces/AudioObject';
import { MessageType } from '../../interfaces/Messenger/MessageType';
import { AbstractAudioMessageObject } from '../AbstractAudioMessage';

export class Audio extends AbstractAudioMessageObject {
    public channel = 'messenger';
    public messenger?: MessageType;

    constructor(
        audio: AudioObject,
        to: string,
        from: string,
        messenger?: MessageType,
        clientRef?: string,
    ) {
        super(audio, to, from, clientRef);
        this.messenger = messenger;
    }
}
