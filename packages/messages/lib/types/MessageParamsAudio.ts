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

  /**
   * The amount of time in seconds the message will live for
   */
  ttl?: number;
} & MessageParams;
