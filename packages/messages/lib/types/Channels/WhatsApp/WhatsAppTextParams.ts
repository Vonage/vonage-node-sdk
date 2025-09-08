import { WhatsAppParams } from './index.js';
import { MessageParamsText } from '../../MessageParamsText.js';

/**
 * Represents a text message type for WhatsApp.
 *
 * @group WhatsApp
 * @category Parameters
 */
export type WhatsAppTextParams = WhatsAppParams & MessageParamsText;
