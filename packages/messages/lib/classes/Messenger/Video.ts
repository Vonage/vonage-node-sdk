import { MessageType } from "../../interfaces/Messenger/MessageType";
import { VideoObject } from "../../interfaces/VideoObject";
import { AbstractVideoMessage } from "../AbstractVideoMessage";

export class Video extends AbstractVideoMessage {
    public channel = 'messenger';
    public messenger?: MessageType;
    
    constructor(video: VideoObject, to: string, from: string, messenger?: MessageType, client_ref?: string) {
        super(video, to, from, client_ref);
        this.messenger = messenger;
    }
}