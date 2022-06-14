import { AudioObject } from "../../interfaces/AudioObject";
import { AbstractAudioMessageObject } from "../AbstractAudioMessage";

export class Audio extends AbstractAudioMessageObject {
    public channel = 'whatsapp';
    
    constructor(audio: AudioObject, to: string, from: string, client_ref?: string) {
        super(audio, to, from, client_ref);
    }
}