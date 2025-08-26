import { MessengerChannelInterface } from './MessengerChannelInterface.js';
import { MessageFileInterface } from '../MessageFileInterface.js';

/**
 * Represents an interface for defining Messenger file messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessengerFileInterface
  extends MessengerChannelInterface,
  MessageFileInterface { }
