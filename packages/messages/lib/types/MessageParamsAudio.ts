import { MessageParams } from './MessageParams.js';
import { MessageAudioType } from './MessageAudioType.js';
import { MessageTypes } from '../enums/MessageTypes.js';

/**
 * Represents the parameters for a message with audio.
 */
export type MessageParamsAudio = {
  messageType: MessageTypes.AUDIO | string;

  /**
   * The audio message content.
   */
  audio: MessageAudioType;
} & MessageParams;
