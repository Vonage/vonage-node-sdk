import { MessengerChannelInterface } from './MessengerChannelInterface';
import { MessageTextInterface } from '../MessageTextInterface';

/**
 * Represents an interface for defining Messenger text messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessengerTextInterface
  extends MessengerChannelInterface,
    MessageTextInterface {}
