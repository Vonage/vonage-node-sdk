import { MessengerChannelInterface } from './MessengerChannelInterface';
import { MessageTextInterface } from '../MessageTextInterface';

export interface MessengerTextInterface
    extends MessengerChannelInterface,
        MessageTextInterface {}
