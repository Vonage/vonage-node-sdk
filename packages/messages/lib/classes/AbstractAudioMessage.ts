import { AbstractMessage } from './AbstractMessage.js';
import { MessageAudioType, MessageParamsAudio } from '../types/index.js';
import { MessageTypes } from '../enums/MessageTypes.js';

/**
 * An abstract base class for audio messages.
 */
export abstract class AbstractAudioMessage
  extends AbstractMessage
  implements MessageParamsAudio {
  /**
   * The type of message (always 'audio').
   */
  public messageType: MessageTypes.AUDIO = MessageTypes.AUDIO;

  public audio: MessageAudioType;

  /**
   * Constructs a new `AbstractAudioMessage` instance.
   *
   * @param {MessageParamsAudio} params - The parameters for creating an audio message.
   */
  public constructor(params: Omit<MessageParamsAudio, 'channel' | 'messageType'>) {
    super(params);
    this.audio = params.audio;
  }
}
