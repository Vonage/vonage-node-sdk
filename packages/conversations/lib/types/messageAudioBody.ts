import { EventMessageType } from '../enums';

export type MessageAudioBody = {
  /**
   * Message type
   */
  messageType: EventMessageType.AUDIO;

  /**
   * Message audio
   */
  audio: {
    /**
     * Audio URL
     */
    url: string;
  }
};
