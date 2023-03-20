import { AbstractAudioMessage } from '../AbstractAudioMessage';
import { MessengerAudioInterface } from '../../interfaces';
import { MessengerAudioParams, MessengerType } from '../../types';

export class MessengerAudio
  extends AbstractAudioMessage
  implements MessengerAudioInterface
{
  public channel: 'messenger';
  public messenger: MessengerType;

  public constructor(params: MessengerAudioParams) {
    super(params);
    this.messenger = params.messenger;
    this.channel = 'messenger';
  }
}
