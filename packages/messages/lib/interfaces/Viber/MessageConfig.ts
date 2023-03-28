import { MessageCategory } from '../../enums/Viber/MessageCategory';

/**
 * @deprecated please use Viber Service instead
 */
export interface MessageConfig {
    category: MessageCategory
    ttl?: number
    type?: string
}
