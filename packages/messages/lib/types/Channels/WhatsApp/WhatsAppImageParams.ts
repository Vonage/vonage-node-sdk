import { MessageParamsImage } from '../../MessageParamsImage';
import { WhatsAppParams } from './WhatsAppParams';

/**
 * Represents a WhatsApp image message type.
 *
 * @group WhatsApp
 * @category Parameters
 */
export type WhatsAppImageParams = WhatsAppParams & MessageParamsImage;
