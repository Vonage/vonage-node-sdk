import { MessengerChannelInterface } from './MessengerChannelInterface';
import { MessageFileInterface } from '../MessageFileInterface';

/**
 * Represents an interface for defining Messenger file messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessengerFileInterface
  extends MessengerChannelInterface,
    MessageFileInterface {}
