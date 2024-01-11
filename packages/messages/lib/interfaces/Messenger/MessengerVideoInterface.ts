import { MessengerChannelInterface } from './MessengerChannelInterface';
import { MessageVideoInterface } from '../MessageVideoInterface';

/**
 * Represents an interface for defining Messenger video messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MessengerVideoInterface
  extends MessengerChannelInterface,
    MessageVideoInterface {}
