import { MessageInterface } from '../interfaces';
import { MessageParams } from '../types';

export abstract class AbstractMessage implements MessageInterface {
  public to: string;
  public from: string;
  public clientRef?: string;

  public constructor(params: MessageParams) {
    this.to = params.to;
    this.from = params.from;
    this.clientRef = params.clientRef;
  }
}
