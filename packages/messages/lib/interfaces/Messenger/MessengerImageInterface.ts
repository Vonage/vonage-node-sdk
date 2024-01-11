import { MessengerChannelInterface } from './MessengerChannelInterface';
import { MessageImageInterface } from '../MessageImageInterface';

/**
 * Represents an interface for defining Messenger image messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessengerImageInterface
  extends MessengerChannelInterface,
    MessageImageInterface {}
