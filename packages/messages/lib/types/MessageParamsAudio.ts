import { MessageParams } from './MessageParams';
import { MessageAudioType } from './MessageAudioType';

/**
 * Represents the parameters for a message with audio.
 */
export type MessageParamsAudio = {
  /**
   * The audio message content.
   */
  audio: MessageAudioType;
} & MessageParams;
