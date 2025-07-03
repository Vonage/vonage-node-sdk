import { MessageParams } from './MessageParams';
import { MessageAudioType } from './MessageAudioType';
import { MessageTypes } from '../enums/MessageTypes';

/**
 * Represents the parameters for a message with audio.
 */
export type MessageParamsAudio = {
  messageType: MessageTypes.AUDIO;

  /**
   * The audio message content.
   */
  audio: MessageAudioType;
} & MessageParams;
