import { AbstractAudioMessage } from '../AbstractAudioMessage';
import { MessageParamsAudio } from '../../types';

/**
 * Represents an audio message for the MMS channel.
 *
 * @group MMS
 */
export class MMSAudio
  extends AbstractAudioMessage
  implements MessageParamsAudio
{
  public channel: 'mms';

  /**
   * Constructs a new `MMSAudio` instance for the MMS channel.
   *
   * @param {MessageParamsAudio} params - The parameters for creating the audio message.
   */
  public constructor(params: MessageParamsAudio) {
    super(params);
    this.channel = 'mms';
  }
}
