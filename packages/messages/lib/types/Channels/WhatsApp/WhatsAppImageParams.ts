import { MessageParamsImage } from '../../MessageParamsImage.js';
import { WhatsAppParams } from './WhatsAppParams.js';

/**
 * Represents a WhatsApp image message type.
 *
 * @group WhatsApp
 * @category Parameters
 */
export type WhatsAppImageParams = WhatsAppParams & MessageParamsImage;
