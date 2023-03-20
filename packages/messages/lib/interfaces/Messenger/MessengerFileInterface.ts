import { MessengerChannelInterface } from './MessengerChannelInterface';
import { MessageFileInterface } from '../MessageFileInterface';

export interface MessengerFileInterface
    extends MessengerChannelInterface,
        MessageFileInterface {}
