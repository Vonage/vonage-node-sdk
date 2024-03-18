import { MessageParamsAudio } from '../../MessageParamsAudio';
import { WhatsAppParams } from './WhatsAppParams';

/**
 * Represents parameters for sending an audio message via WhatsApp.
 *
 * @group WhatsApp
 * @category Parameters
 */
export type WhatsAppAudioParams = WhatsAppParams & MessageParamsAudio;
