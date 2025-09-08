import { MessengerChannelInterface } from './MessengerChannelInterface.js';
import { MessageTextInterface } from '../MessageTextInterface.js';

/**
 * Represents an interface for defining Messenger text messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessengerTextInterface
  extends MessengerChannelInterface,
  MessageTextInterface { }
