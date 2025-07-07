import { MessageTypes } from '../enums/MessageTypes';
import { MessageParams } from './MessageParams';

export type MessageContentObject = {
    /**
     * The type of attachment.
     */
    type: 'image' | 'audio' | 'video' | 'vcard' | 'file';

    /**
     * The URL of the attachment.
     */
    url: string;

    /**
     * Additional text to accompany the attachment.
     */
    content?: string;
  }
/**
 * Represents the parameters for a message with an content attachment.
 */
export type MessageParamsContent = {
  messageType: MessageTypes.CONTENT;

  content: Array<MessageContentObject>
} & MessageParams;
