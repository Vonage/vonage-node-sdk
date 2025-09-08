import { MessengerChannelInterface } from './MessengerChannelInterface.js';
import { MessageImageInterface } from '../MessageImageInterface.js';

/**
 * Represents an interface for defining Messenger image messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessengerImageInterface
  extends MessengerChannelInterface,
  MessageImageInterface { }
