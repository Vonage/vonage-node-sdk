import { AudioObject } from "../../interfaces/AudioObject";
import { MessageType } from "../../interfaces/Messenger/MessageType";
import { AbstractAudioMessageObject } from "../AbstractAudioMessage";

export class Audio extends AbstractAudioMessageObject {
    public channel = 'messenger';
    public messenger?: MessageType;
    
    constructor(audio: AudioObject, to: string, from: string, messenger?: MessageType, client_ref?: string) {
        super(audio, to, from, client_ref);
        this.messenger = messenger;
    }
}