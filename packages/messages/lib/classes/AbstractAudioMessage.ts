import { AbstractMessage } from './AbstractMessage';
import { MessageParamsAudio } from '../types';
import { MessageAudioType } from '../types';

/**
 * An abstract base class for audio messages.
 */
export abstract class AbstractAudioMessage
  extends AbstractMessage
  implements MessageParamsAudio
{
  public messageType: 'audio';
  public audio: MessageAudioType;

  /**
   * Constructs a new `AbstractAudioMessage` instance.
   *
   * @param {MessageParamsAudio} params - The parameters for creating an audio message.
   */
  public constructor(params: MessageParamsAudio) {
    super(params);
    this.audio = params.audio;
    this.messageType = 'audio';
  }
}
