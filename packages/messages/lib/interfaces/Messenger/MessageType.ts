import { MessageCategory } from '../../enums/Messenger/MessageCategory';

/**
 * @deprecated please use messenger interfaces
 */
export interface MessageType {
    category: MessageCategory
    tag?: string
}
