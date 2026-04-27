import { AbstractMessage } from './AbstractMessage.js';

import { MessageTypes } from '../enums/MessageTypes.js';

/**
 * An abstract base class for audio messages.
 */
export class AbstractAudioMessage extends
AbstractMessage
{
  /**
   * The type of message (always 'audio').
   */
  messageType = MessageTypes.AUDIO;

  audio;

  /**
   * Constructs a new `AbstractAudioMessage` instance.
   *
   * @param {MessageParamsAudio} params - The parameters for creating an audio message.
   */
  constructor(params) {
    super(params);
    this.audio = params.audio;
  }
}
