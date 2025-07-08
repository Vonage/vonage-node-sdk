import { MessageParamsAudio } from '../../MessageParamsAudio';
import { WhatsAppParams } from './WhatsAppParams';

/**
 * Represents parameters for sending an audio message via WhatsApp.
 *
 * @group WhatsApp
 * @category Parameters
 */
export type WhatsAppAudioParams = {
  /**
   * The amount of time in seconds the message will live for
   */
  ttl?: number;
} & WhatsAppParams & MessageParamsAudio;
