import { MessageCategory } from "../../enums/Messenger/MessageCategory"

export interface MessageType {
    category: MessageCategory
    tag?: string
}