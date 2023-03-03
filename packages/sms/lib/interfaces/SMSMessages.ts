import { ErrorMessage } from './ErrorMessage';
import { Message } from './Message';
import { SMSResponse } from './Response/index';

export interface SMSMessages extends SMSResponse {
    messageCount: number
    messages: Array<Message & ErrorMessage>
}
