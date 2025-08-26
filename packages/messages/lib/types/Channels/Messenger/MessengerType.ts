import { MessengerCategory } from '../../../enums/index.js';

/**
 * Represents the type of message to be sent via the Messenger platform.
 *
 * @group Messenger
 * @category Parameters
 */
export type MessengerType = {
  /**
   * The category of the Messenger message.
   */
  category: MessengerCategory;

  /**
   * An optional tag describing the type and relevance of the 1:1 communication between your app and the end user.
   */
  tag?: string;
};
