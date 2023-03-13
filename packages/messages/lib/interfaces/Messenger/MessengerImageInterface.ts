import { MessengerChannelInterface } from './MessengerChannelInterface';
import { MessageImageInterface } from '../MessageImageInterface';

export interface MessengerImageInterface
    extends MessengerChannelInterface,
        MessageImageInterface {}
