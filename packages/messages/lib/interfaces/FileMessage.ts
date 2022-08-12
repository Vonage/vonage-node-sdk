import { FileObject } from './FileObject'
import { MessageObject } from './MessageObject'

export interface FileMessage extends MessageObject {
    file: FileObject
}
