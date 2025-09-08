import { MessengerChannelInterface } from './MessengerChannelInterface.js';
import { MessageVideoInterface } from '../MessageVideoInterface.js';

/**
 * Represents an interface for defining Messenger video messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessengerVideoInterface
  extends MessengerChannelInterface,
  MessageVideoInterface { }
