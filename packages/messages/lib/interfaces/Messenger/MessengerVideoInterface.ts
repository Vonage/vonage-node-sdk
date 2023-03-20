import { MessengerChannelInterface } from './MessengerChannelInterface';
import { MessageVideoInterface } from '../MessageVideoInterface';

export interface MessengerVideoInterface
    extends MessengerChannelInterface,
        MessageVideoInterface {}
