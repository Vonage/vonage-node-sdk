import { MessageCategory } from '../../enums/Viber/MessageCategory'

export interface MessageConfig {
    category: MessageCategory
    ttl?: number
    type?: string
}
