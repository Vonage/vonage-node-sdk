import { FileObject } from '../../interfaces/FileObject'
import { MessageType } from '../../interfaces/Messenger/MessageType'
import { AbstractFileMessage } from '../AbstractFileMessage'

export class File extends AbstractFileMessage {
    public channel = 'messenger'
    public messenger?: MessageType

    constructor(
        file: FileObject,
        to: string,
        from: string,
        messenger?: MessageType,
        clientRef?: string
    ) {
        super(file, to, from, clientRef)
        this.messenger = messenger
    }
}
