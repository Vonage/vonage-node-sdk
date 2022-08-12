import { FileObject } from '../../interfaces/FileObject'
import { AbstractFileMessage } from '../AbstractFileMessage'

export class File extends AbstractFileMessage {
    public channel = 'whatsapp'

    constructor(
        file: FileObject,
        to: string,
        from: string,
        clientRef?: string
    ) {
        super(file, to, from, clientRef)
    }
}
