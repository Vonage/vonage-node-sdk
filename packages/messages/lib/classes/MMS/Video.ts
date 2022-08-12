import { VideoObject } from '../../interfaces/VideoObject'
import { AbstractVideoMessage } from '../AbstractVideoMessage'

export class Video extends AbstractVideoMessage {
    public channel = 'mms'

    constructor(
        video: VideoObject,
        to: string,
        from: string,
        clientRef?: string
    ) {
        super(video, to, from, clientRef)
    }
}
