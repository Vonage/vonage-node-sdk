import { AbstractMessage } from './AbstractMessage';
import { MessageAudioInterface } from '../interfaces';
import { MessageParamsAudio } from '../types';
import { MessageAudioType } from '../types';

export abstract class AbstractAudioMessage
  extends AbstractMessage
  implements MessageAudioInterface
{
  public messageType: 'audio';
  public audio: MessageAudioType;

  public constructor(params: MessageParamsAudio) {
    super(params);
    this.audio = params.audio;
    this.messageType = 'audio';
  }
}
