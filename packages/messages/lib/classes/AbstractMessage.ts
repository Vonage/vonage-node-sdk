import { MessageParams } from '../types';

/**
 * An abstract base class for message objects.
 */
export abstract class AbstractMessage implements MessageParams {
  /**
   * The recipient of the message.
   */
  public to: string;

  /**
   * The sender of the message.
   */
  public from: string;

  /**
   * An optional client reference for the message.
   */
  public clientRef?: string;

  /**
   * Constructs a new `AbstractMessage` instance.
   *
   * @param {MessageParams} params - The parameters for creating a message.
   */
  public constructor(params: MessageParams) {
    this.to = params.to;
    this.from = params.from;
    this.clientRef = params.clientRef;
  }
}
