import { VideoMessage } from "../interfaces/VideoMessage";
import { VideoObject } from "../interfaces/VideoObject";

export abstract class AbstractVideoMessage implements VideoMessage {
    public message_type: string = 'video';
    public channel: string;
    public video: VideoObject;
    public to: string;
    public from: string;
    public client_ref?: string;

    constructor(video: VideoObject, to: string, from: string, client_ref?: string) {
        this.video = video;
        this.to = to;
        this.from = from;
        this.client_ref = client_ref;
    }
}