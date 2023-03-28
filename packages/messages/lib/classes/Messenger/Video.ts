import { MessengerCategory } from '../../enums';
import { MessageType } from '../../interfaces/Messenger/MessageType';
import { VideoObject } from '../../interfaces/VideoObject';
import { MessengerType } from '../../types';
import { MessengerVideo } from './MessengerVideo';

export class Video extends MessengerVideo {
  constructor(
    video: VideoObject,
    to: string,
    from: string,
    messenger?: MessageType,
    clientRef?: string,
  ) {
    super({
      video: video,
      to: to,
      from: from,
      messenger: {
        category: messenger.category as unknown as MessengerCategory,
        tag: messenger.tag,
      } as MessengerType,
      clientRef: clientRef,
    });
  }
}
