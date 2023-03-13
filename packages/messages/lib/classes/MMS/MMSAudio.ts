import { AbstractAudioMessage } from '../AbstractAudioMessage';
import { MMSAudioInterface } from '../../interfaces';
import { MessageParamsAudio } from '../../types';

export class MMSAudio
  extends AbstractAudioMessage
  implements MMSAudioInterface
{
  public channel: 'mms';

  public constructor(params: MessageParamsAudio) {
    super(params);
    this.channel = 'mms';
  }
}
