import { MessageCategory } from '../../enums/Viber/MessageCategory';

/**
 * Represents a message configuration. for Viber
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessageConfig {
  /**
   * The category of the message.
   */
  category: MessageCategory;

  /**
   * The time-to-live (TTL) of the message in seconds.
   */
  ttl?: number;

  /**
   * The type of the message.
   */
  type?: string;
}

