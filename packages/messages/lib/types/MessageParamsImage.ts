import { MessageParams } from './MessageParams.js';
import { MessageImageType } from './MessageImageType.js';

/**
 * Represents the parameters for a message with an image attachment.
 */
export type MessageParamsImage = {
  /**
   * The image attachment content.
   */
  image: {
    caption?: string;
  } & MessageImageType;


  /**
   * The amount of time in seconds the message will live for
   */
  ttl?: number;
} & MessageParams;
