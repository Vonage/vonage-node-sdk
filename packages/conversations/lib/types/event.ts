import { EventType } from '../enums/index.js';
import { AnyMessageBody } from './anyMessageBody.js';
import { EventUser } from './eventUser.js';

export type Event = {
  /**
   * The ID of the message.
   */
  id: number;

  /**
   * Message type
   */
  type: EventType;

  /**
   * Member ID of the event.
   */
  from: string

  /**
   * Data of the event.
   */
  body: AnyMessageBody;

  /**
   * Timestamp of the event.
   */
  timestamp?: string;

  /**
   * Sender User
   */
  fromUser?: EventUser;

  /**
   * Sender Memeber
   */
  fromMember?: {
    /**
     * Member ID
     */
    id: string;
  };


}
