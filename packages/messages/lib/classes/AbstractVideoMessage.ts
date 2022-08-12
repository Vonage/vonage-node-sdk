import { VideoMessage } from '../interfaces/VideoMessage'
import { VideoObject } from '../interfaces/VideoObject'

export abstract class AbstractVideoMessage implements VideoMessage {
    /* tslint:disable-next-line */
    public message_type: string = 'video'
    public channel: string
    public video: VideoObject
    public to: string
    public from: string
    /* tslint:disable-next-line */
    public client_ref?: string

    constructor(
        video: VideoObject,
        to: string,
        from: string,
        clientRef?: string
    ) {
        this.video = video
        this.to = to
        this.from = from
        this.client_ref = clientRef
    }
}
